const express = require("express");
const router = express.Router();

const { addContact } = require("../controllers/contactController");
const protect = require("../middleware/authMiddleware");

// Add a new emergency contact
router.post("/", protect, addContact);

module.exports = router;