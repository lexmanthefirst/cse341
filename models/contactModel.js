const { getDB } = require("../database/connect");

//Get all contacts
async function getContacts() {
  const db = getDB();
  const contacts = await db.collection("contacts").find({}).toArray();
  return contacts;
}
module.exports = {
  getContacts,
};
