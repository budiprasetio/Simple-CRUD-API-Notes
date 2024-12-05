const { query } = require("../Database/db.js");

const getNotes = async (req, res) => {
  try {
    const notes = await query("SELECT * FROM notes");
    return res.status(200).json({ succses: true, data: notes });
  } catch (error) {
    console.error("Codingan kamu salah brow", error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};
const addNotes = async (req, res) => {
  const { title, datetime, note } = req.body;
  try {
    await query("INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)", [title, datetime, note]);
    return res.status(200).json({ msg: "Note telah ditambah" });
  } catch (error) {
    return res.status(500).json({ msg: "Note gabisa ditambah" });
  }
};

const updateNotes = async (req, res) => {
  const { id } = req.params;
  const { title, note } = req.body;
  try {
    await query("UPDATE notes SET title = ?, note = ? WHERE id = ?", [title, note, id]);
    return res.status(200).json({ msg: "Note telah diupdate" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Note gabisa diupdate" });
  }
};

const deleteNotes = async (req, res) => {
  const { id } = req.params;
  try {
    await query("DELETE FROM notes WHERE id = ?", [id]);
    return res.status(200).json({ msg: "Note telah dihapus" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Note gabisa dihapus" });
  }
};

module.exports = { getNotes, addNotes, updateNotes, deleteNotes };
