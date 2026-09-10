const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const applicationRoutes = require("./routes/applicationroutes");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("HexaHive Backend is running!");
});

// Authentication routes
app.use("/api/auth", authRoutes);
app.use("/api/applications", applicationRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully!");

        app.listen(5000, () => {
            console.log("Server running on http://localhost:5000");
        });
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error.message);
    });