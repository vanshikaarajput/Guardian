const express = require("express");
const router = express.Router();

const {
  createSOS,
  getAllSOSAlerts,
} = require("../controllers/sosController");

const protect = require("../middleware/authMiddleware");

// Create SOS Alert
router.post("/", protect, createSOS);

// Get SOS History
router.get("/", protect, getAllSOSAlerts);

module.exports = router;