const { getDB } = require("../database/connect");

//Get all contacts
async function getContacts() {
  const db = getDB();
  const contacts = await db.collection("contacts").find({}).toArray();
  return contacts;
}

//Get a single contact
async function getContactById(id) {
  const db = getDB();
  const contact = await db
    .collection("contacts")
    .findOne({ _id: new ObjectId(id) });
  return contact;
}
module.exports = {
  getContacts,
  getContactById,
};
