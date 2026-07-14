const express = require("express");

const profileRoutes = require("./routes/profileRoutes");
const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
const sosRoutes = require("./routes/sosRoutes");

const app = express();

// ===============================
// Middleware
// ===============================
app.use(express.json());

// ===============================
// Routes
// ===============================
app.use("/api/profile", profileRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/sos", sosRoutes);

// ===============================
// Home Route
// ===============================
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Guardian Backend is Running 🚀",
    author: "Vanshika Rajput",
    timestamp: new Date(),
  });
});

// ===============================
// Health Check Route
// ===============================
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "GUARDIAN API IS HEALTHY",
    author: "Vanshika Rajput",
    timestamp: new Date(),
  });
});

// ===============================
// 404 Route Handler
// ===============================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

module.exports = app;