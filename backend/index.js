const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

// Connecting to database
connectToMongo();

// App
const app = express();
const port = 5000;

// Enabling CORS
app.use(cors());

// To use json bundles
app.use(express.json());

// Listening
app.listen(port, () => {
  console.log(`Dance website listening at http://localhost:${port}`);
});
