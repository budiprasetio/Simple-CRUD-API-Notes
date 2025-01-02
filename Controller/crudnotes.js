const { query } = require("../Database/db.js");

const getNotes = async (req, res) => {
  try {
    const notes = await query("SELECT * FROM notes");
    return res.status(200).json({ success: true, data: notes });
  } catch (error) {
    console.error("Error fetching notes:", error);
    return res.status(500).json({ success: false, msg: "Internal Server Error" });
  }
};

const addNotes = async (req, res) => {
  const { title, datetime, note } = req.body;

  // Validasi input
  if (!title || !datetime || !note) {
    return res.status(400).json({ success: false, msg: "Semua field harus diisi!" });
  }

  try {
    await query("INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)", [title, datetime, note]);
    return res.status(201).json({ success: true, msg: "Note telah ditambah" });
  } catch (error) {
    console.error("Error adding note:", error);
    return res.status(500).json({ success: false, msg: "Note gabisa ditambah" });
  }
};

const updateNotes = async (req, res) => {
  const { id } = req.params;
  const { title, note } = req.body;

  // Validasi input
  if (!id || !title || !note) {
    return res.status(400).json({ success: false, msg: "ID, title, dan note harus diisi!" });
  }

  try {
    const result = await query("UPDATE notes SET title = ?, note = ? WHERE id = ?", [title, note, id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, msg: "Note tidak ditemukan" });
    }
    return res.status(200).json({ success: true, msg: "Note telah diupdate" });
  } catch (error) {
    console.error("Error updating note:", error);
    return res.status(500).json({ success: false, msg: "Note gabisa diupdate" });
  }
};

const deleteNotes = async (req, res) => {
  const { id } = req.params;

  // Validasi input
  if (!id) {
    return res.status(400).json({ success: false, msg: "ID harus diisi!" });
  }

  try {
    const result = await query("DELETE FROM notes WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, msg: "Note tidak ditemukan" });
    }
    return res.status(200).json({ success: true, msg: "Note telah dihapus" });
  } catch (error) {
    console.error("Error deleting note:", error);
    return res.status(500).json({ success: false, msg: "Note gabisa dihapus" });
  }
};

module.exports = { getNotes, addNotes, updateNotes, deleteNotes };
