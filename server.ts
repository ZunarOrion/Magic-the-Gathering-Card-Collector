import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import { MongoClient, ObjectId } from "mongodb";

const mtg = "test";
const mtgCollections = "dummy";

const app = express();
const port = 3000;
const isProduction = process.env.NODE_ENV === "production";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
await client.connect();

app.post("/form", async (req: express.Request, res: express.Response) => {
    const data = req.body;

    try {
        const db = client.db(mtg);
        const collection = db.collection(mtgCollections);
        const result = await collection.insertOne(data);

        res.status(201).json({
            _id: result.insertedId,
            ...data
        });
    } catch (error) {
        console.error("Error inserting collection:", error);
        res.status(500).json({ error: "Failed to create collection" });
    }; 
});

app.get("/form", async (_req: express.Request, res: express.Response) => {
    const db = client.db(mtg);
    const collection = db.collection(mtgCollections);
    const result = await collection.find().toArray();
    res.json(result);
})

app.delete("/form/:id", async (req: express.Request, res: express.Response) => {
        const db = client.db(mtg);
        const collection = db.collection(mtgCollections);
        const result = await collection.deleteOne({_id: new ObjectId(req.params.id)});
        res.json({ deletedCount: result.deletedCount });
    });

app.put("/form/:id", async (req: express.Request, res: express.Response) => {
    const newValue = req.body.collection;
    const db = client.db(mtg);
    const collection = db.collection(mtgCollections);
    const result = await collection.updateOne(
        {_id: new ObjectId(req.params.id)},
        {$set:{ collection: newValue }}
    );
    res.json({updatedCount: result.modifiedCount});
});




let vite
if (!isProduction) {
    const {createServer: createViteServer} = await import("vite");
    vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
    });
    app.use(vite.middlewares);
} else {
    const distPath = path.join(__dirname, "dist");
    app.use(express.static(distPath))
    app.get("/*splat", (_req: express.Request, res: express.Response) => {
        res.sendFile(path.join(distPath, "index.html"));
    });
}

app.listen(port, () => {
    console.log(`running ${isProduction ? "PROD" : "DEV"} server at http://localhost:${port}`);
});
