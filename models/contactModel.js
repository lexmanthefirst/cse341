const { getDB } = require("../database/connect");
// const { ObjectId } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;

//Get all contacts
async function getContacts() {
  const db = getDB();
  const contacts = await db.collection("contacts").find({}).toArray();
  return contacts;
}

//Get a single contact
async function getContactById(id) {
  const db = getDB();
  const userId = ObjectId.createFromHexString(id);
  const contact = await db.collection("contacts").findOne({ _id: userId });
  return contact;
}
module.exports = {
  getContacts,
  getContactById,
};
