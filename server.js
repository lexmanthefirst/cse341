//ENV setup
require("dotenv").config();

//Importing required modules
const express = require("express");

//Express app initialization
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//server startup
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
