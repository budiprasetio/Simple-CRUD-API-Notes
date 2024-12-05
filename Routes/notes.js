const express = require("express");
const router = express.Router();
// const { testConnection } = require("../Database/db.js");
const { getNotes, addNotes, updateNotes, deleteNotes } = require("../Controller/crudnotes.js");

router.get("/notes", getNotes);
router.post("/notes", addNotes);
router.put("/notes/:id", updateNotes);
router.delete("/notes/:id", deleteNotes);
// router.get("/notestio", async (req, res) => {
//   await testConnection();
//   getNotes(req, res);
// });

// router.post("/notestio", async (req, res) => {
//   await testConnection();
//   addNotes(req, res);
// });

// router.put("/notestio/:id", async (req, res) => {
//   await testConnection();
//   updateNotes(req, res);
// });

// router.delete("/notestio/:id", async (req, res) => {
//   await testConnection();
//   deleteNotes(req, res);
// });

module.exports = router;
