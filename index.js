const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const notesRoutes = require("./Routes/notes.js");
const { testConnection } = require("./Database/db.js");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(notesRoutes);

app.listen(process.env.APP_PORT, async () => {
  await testConnection();
  console.log(`Running at http://localhost:${process.env.APP_PORT}`);
});
