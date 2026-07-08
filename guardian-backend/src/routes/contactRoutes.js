const express = require("express");
const router = express.Router();

const {
  addContact,
  getAllContacts,
  updateExistingContact,
} = require("../controllers/contactController");

const protect = require("../middleware/authMiddleware");

// Create Contact
router.post("/", protect, addContact);

// Get All Contacts
router.get("/", protect, getAllContacts);

// Update Contact
router.put("/:id", protect, updateExistingContact);

module.exports = router;