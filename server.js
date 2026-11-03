
const express = require("express");
const app = express();
const path = require("path");
const { MongoClient } = require("mongodb");

const PORT = process.env.PORT || 5050;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// MongoDB connection
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL);

// GET all users
app.get("/getUsers", async (req, res) => {
    try {
        await client.connect();

        console.log("Connected successfully to MongoDB");

        const db = client.db("apnacollege-db");
        const data = await db.collection("users").find({}).toArray();

        res.json(data);
    } catch (error) {
        console.error("Get Users Error:", error);
        res.status(500).send("Database error");
    }
});

// POST new user
app.post("/addUser", async (req, res) => {
    try {
        const userObj = req.body;

        await client.connect();

        console.log("Connected successfully to MongoDB");

        const db = client.db("apnacollege-db");
        const data = await db.collection("users").insertOne(userObj);

        console.log("Data inserted:", data.insertedId);

        res.status(201).json({
            message: "User added successfully",
            insertedId: data.insertedId
        });

    } catch (error) {
        console.error("Add User Error:", error);
        res.status(500).send("Database error");
    }
});

// Health check
app.get("/health", (req, res) => {
    res.status(200).send("Application is running");
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
