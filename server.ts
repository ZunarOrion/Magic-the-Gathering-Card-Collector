import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import { MongoClient, ObjectId } from "mongodb";
import { MongoMemoryServer } from 'mongodb-memory-server';
import dotenv from 'dotenv';

dotenv.config();

const mtg = "mtg";
const mtgCollections = "mtgCollections";

const app = express();
const port = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === "production";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

let isTesting = process.env.NODE_ENV === "test";
let uri;
if (isTesting) {
    const mongod = await MongoMemoryServer.create({
        instance: {
            dbName: "mtg"
        }
    });
    uri = mongod.getUri();
} else {
    uri = process.env.MONGO_DB_CONNECTION_STRING as string;
};
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
        root: __dirname,
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
