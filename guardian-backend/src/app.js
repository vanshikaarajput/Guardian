const express = require("express");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

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
    <h2>Guardian backend is running 🚀</h2>
    <h3>Time: ${new Date().toLocaleString()}</h3>
  `);
});

module.exports = app;