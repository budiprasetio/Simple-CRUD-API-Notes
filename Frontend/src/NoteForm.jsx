// NoteForm.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";

const NoteForm = ({ isOpen, onClose, fetchNotes, editingNote }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setNote(editingNote.note);
    } else {
      setTitle("");
      setNote("");
    }
  }, [editingNote]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingNote) {
        await axios.put(`http://localhost:3000/notes/${editingNote.id}`, {
          title,
          note,
        });
      } else {
        await axios.post("http://localhost:3000/notes", {
          title,
          datetime: new Date().toISOString().slice(0, 19).replace("T", " "),
          note,
        });
      }
      fetchNotes();
      onClose();
    } catch (error) {
      console.error("Failed to save note", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{editingNote ? "Edit Note" : "Add Note"}</h2>
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-600 mb-2">Title</label>
        <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-400" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-600 mb-2">Note</label>
        <textarea className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-400" value={note} onChange={(e) => setNote(e.target.value)} rows="4" required></textarea>
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500" onClick={onClose}>
          Cancel
        </button>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Save
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
