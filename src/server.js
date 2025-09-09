import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Collection added");
});

import { MongoClient } from "mongodb";
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
    console.log(req.body);
    await run(data);
});

app.listen(port, () => {
    console.log("Example app running...");
});