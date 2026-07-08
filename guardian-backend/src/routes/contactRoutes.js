const express = require("express");
const router = express.Router();

const {
  addContact,
  getAllContacts,
} = require("../controllers/contactController");

const protect = require("../middleware/authMiddleware");

// Add a new emergency contact
router.post("/", protect, addContact);

// Get all emergency contacts of logged-in user
router.get("/", protect, getAllContacts);

module.exports = router;