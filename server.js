//Require env
require("dotenv").config();

// Importing required modules
const express = require("express");
const cors = require("cors");
//Express app initialization
const app = express();
const contactRoutes = require("./routes/contactRoutes");
const { connectDB } = require("./database/connect");

// Middleware
app.use(cors());

app.use(express.json());
app.use("/contacts", contactRoutes);

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
}
startServer();
