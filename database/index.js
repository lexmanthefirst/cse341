const { MongoClient } = require("mongodb");
require("dotenv").config();

async function main() {
  //   const client = await mongoClient.connect(process.env.MONGO_URI, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   });
  // return client;
  const client = new MongoClient(process.env.MONGO_URI);
  try {
    await client.connect();
    await listDatabases(client);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}
main().catch(console.error);

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach((db) => {
    console.log(` - ${db.name}`);
  });
}
