const contactModel = require("../models/contactModel");

//Get all contacts
async function getContacts(req, res) {
  try {
    const contacts = await contactModel.getContacts();
    res.status(200).json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
//Get a single contact
async function getContactById(req, res) {
  try {
    const result = await contactModel.getContactById(req.params.id);
    result
      ? res.status(200).json(result)
      : res.status(404).json({ message: "Contact not found" });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  getContacts,
  getContactById,
};
