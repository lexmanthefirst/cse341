const { getDB } = require('../database/connect');
// const { ObjectId } = require("mongodb");
const ObjectId = require('mongodb').ObjectId;

//Get all contacts
async function getContacts() {
  const db = getDB();
  const contacts = await db.collection('contacts').find({}).toArray();
  return contacts;
}

//Get a single contact
async function getContactById(id) {
  const db = getDB();
  const userId = ObjectId.createFromHexString(id);
  const contact = await db.collection('contacts').findOne({ _id: userId });
  return contact;
}
//Create a new contact
async function createContact(contact) {
  const db = getDB();
  const result = await db.collection('contacts').insertOne(contact);
  return result;
}
//Update contact by Id
async function updateContact(id, contact) {
  const db = getDB();
  const userId = ObjectId.createFromHexString(id);
  const result = await db
    .collection('contacts')
    .updateOne({ _id: userId }, { $set: contact });
  return result;
}
//Delete contact by Id
async function deleteContact(id) {
  const db = getDB();
  const userId = ObjectId.createFromHexString(id);
  const result = await db.collection('contacts').deleteOne({ _id: userId });
  return result;
}

module.exports = {
  getContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
