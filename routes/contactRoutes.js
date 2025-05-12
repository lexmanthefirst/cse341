const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

// Middleware to parse JSON requests
router.use(express.json());

//Route to get all contacts
router.get("/", contactController.getContacts);

module.exports = router;
