const express = require("express");
const router = express.Router();

const { createSOS } = require("../controllers/sosController");
const protect = require("../middleware/authMiddleware");

// Create SOS Alert
router.post("/", protect, createSOS);

module.exports = router;