const contactModel = require('../models/contactModel');

//Get all contacts
async function getContacts(req, res) {
  try {
    const contacts = await contactModel.getContacts();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Internal server erSSror' });
  }
}
//Get a single contact
async function getContactById(req, res) {
  try {
    const result = await contactModel.getContactById(req.params.id);
    result
      ? res.status(200).json(result)
      : res.status(404).json({ message: 'Contact not found' });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

//Create a new contact
async function createContact(req, res) {
  try {
    const { firstName, lastName, email, birthday, favoriteColor } = req.body;

    //  validation
    if (!firstName || !lastName || !email || !birthday || !favoriteColor) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const contact = {
      firstName,
      lastName,
      email,
      birthday: new Date(birthday),
      favoriteColor,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await contactModel.createContact(contact);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

//update a contact
async function updateContact(req, res) {
  try {
    const contact = req.body;
    const result = await contactModel.updateContact(req.params.id, contact);
    result
      ? res.status(200).json(result)
      : res.status(404).json({ message: 'Contact not found' });
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

//Delete a contact
async function deleteContact(req, res) {
  try {
    const result = await contactModel.deleteContact(req.params.id);
    result
      ? res.status(200).json({ message: 'Contact deleted successfully' })
      : res.status(404).json({ message: 'Contact not found' });
  } catch {
    console.error('Error deleting contact:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
