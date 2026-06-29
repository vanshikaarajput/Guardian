const express = require("express");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());// this allows req.body (auth-control)

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {

  res.json({

    message: "Guardian backend is running 🚀",

  });
  
});

module.exports = app;