// NotesPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteForm from "./NoteForm";
import NoteTable from "./NoteTable";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  const fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/notes");
      setNotes(response.data.data);
    } catch (error) {
      console.error("Failed to fetch notes", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleAddNote = () => {
    setEditingNote(null);
    setIsFormOpen(true);
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
    setIsFormOpen(true);
  };

  const handleDeleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/notes/${id}`);
      fetchNotes();
    } catch (error) {
      console.error("Failed to delete note", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-600 via-blue-500 to-indigo-700 text-white p-8 relative">
      <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/assets/background-pattern.svg')" }}></div>
      <div className="relative z-10 max-w-6xl mx-auto p-6 bg-white/10 rounded-lg shadow-lg backdrop-blur-md">
        <h1 className="text-5xl font-bold mb-8 text-center text-gradient">Notes Manager</h1>
        <div className="flex justify-between items-center mb-6">
          <button className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition-all" onClick={handleAddNote}>
            + Add Note
          </button>
        </div>
        <NoteTable notes={notes} onEdit={handleEditNote} onDelete={handleDeleteNote} />
        {isFormOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
            <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-lg">
              <NoteForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} fetchNotes={fetchNotes} editingNote={editingNote} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesPage;
