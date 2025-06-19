const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 6065;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ WhiskersAndWhispersCafe API is live!");
});

// Use the connection string from the .env file
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    console.log("✅ MongoDB connected successfully");

    const cloth = client.db("demo").collection("hello");

    app.post("/upload", async (req, res) => {
      const data = req.body;
      const result = await cloth.insertOne(data);
      res.status(201).json(result);
    });

    app.get("/sns", async (req, res) => {
      const foods = await cloth.find().toArray();
      res.status(200).json(foods);
    });

    app.get("/snsbyid/:id", async (req, res) => {
      const id = req.params.id;
      const result = await cloth.findOne({ _id: new ObjectId(id) });
      res.status(200).json(result);
    });

    app.patch("/allproductsnacks/:id", async (req, res) => {
      const id = req.params.id;
      const updateDoc = { $set: req.body };
      const result = await cloth.updateOne({ _id: new ObjectId(id) }, updateDoc);
      res.status(200).json(result);
    });

    app.delete("/deletesnack/:id", async (req, res) => {
      const id = req.params.id;
      const result = await cloth.deleteOne({ _id: new ObjectId(id) });
      res.status(200).json({ success: true, message: "Data deleted", result });
    });

  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
