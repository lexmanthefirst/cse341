const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

// Middleware to parse JSON requests
router.use(express.json());

//Route to get all contacts
router.get("/", contactController.getContacts);
//Route to get a single contact
router.get("/:id", contactController.getContactById);

module.exports = router;
