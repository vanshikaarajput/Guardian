const express = require("express");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Health Check Route
app.get("/health", (req, res) => {
  res.send(`
    <h2>GUARDIAN API IS HEALTHY</h2>
    <p>AUTHOR : VANSHIKA RAJPUT</p>
  `);
});

// Home Route
app.get("/", (req, res) => {
  res.send(`
    <h2>Guardian Backend is Running 🚀</h2>
    <h3>Time: ${new Date().toLocaleString()}</h3>
  `);
});

// Health Check Route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "GUARDIAN API IS HEALTHY",
    author: "Vanshika Rajput",
    timestamp: new Date(),
  });
});

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

module.exports = app;