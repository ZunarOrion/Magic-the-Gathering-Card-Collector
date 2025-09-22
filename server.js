import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import { MongoClient, ObjectId } from "mongodb";

const app = express();
const port = 3000;
const isProduction = process.env.NODE_ENV === "production";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Collection added");
// });

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function run(data) {
    try {
        await client.connect();
        const db = client.db("test");
        const collection = db.collection("dummy");
        await collection.insertOne(data);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        await client.close();
    };
};

app.post("/form", async (req, res) => {
    const data = req.body;

    try {
        await client.connect();
        const db = client.db("test");
        const collection = db.collection("dummy");
        const result = await collection.insertOne(data);

        res.status(201).json({
            _id: result.insertedId,
            ...data
        });
    } catch (error) {
        console.error("Error inserting collection:", error);
        res.status(500).json({ error: "Failed to create collection" });
    } finally {
        await client.close();
    };
});
//     console.log(req.body);
//     await run(data);

app.get("/form", async (req, res) => {
    await client.connect();
    const db = client.db("test");
    const collection = db.collection("dummy");
    const result = await collection.find().toArray();
    res.json(result);
})

app.delete("/form/:id", async (req, res) => {
        await client.connect();
        const db = client.db("test");
        const collection = db.collection("dummy");
        const result = await collection.deleteOne({_id: new ObjectId(req.params.id)});
        res.json({ deletedCount: result.deletedCount });
    });

app.put("/form/:id", async (req, res) => {
    const newValue = req.body.collection;
    await client.connect();
    const db = client.db("test");
    const collection = db.collection("dummy");
    const result = await collection.updateOne(
        {_id: new ObjectId(req.params.id)},
        {$set:{ collection: newValue }}
    );
    res.json({updatedCount: result.modifiedCount});
});




let vite
if (!isProduction) {
    const rootHTML = path.join(__dirname, "index.html");
    const {createServer: createViteServer} = await import("vite");
    vite = await createViteServer({
        server: { middlewareMode: "html" },
        appType: "spa",
        rootHTML
    });
    app.use(vite.middlewares);
} else {
    const distPath = path.join(__dirname, "dist");
    app.use(express.static(distPath))
    app.get("/*splat", (req, res) => {
        res.sendFile(path.join(distPath, "index.html"));
    });
}

app.listen(port, () => {
    console.log(`running ${isProduction ? "PROD" : "DEV"} server at http://localhost:${port}`);
});