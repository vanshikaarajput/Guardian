const express = require("express");

const {
    updateUserLocation,
    getUserLocation,
} = require("../controllers/locationController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.put("/", protect, updateUserLocation);

router.get("/", protect, getUserLocation);

module.exports = router;