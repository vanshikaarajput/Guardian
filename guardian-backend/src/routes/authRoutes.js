const express = require("express"); // imports express
const router = express.Router();//creates a mini router

const { registerUser } = require("../controllers/authController"); //Imports our controller function.

router.post("/register", registerUser); // POST /register -> run registerUser()

module.exports = router; //Exports the router so app.js can use it.