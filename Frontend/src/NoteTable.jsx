// NoteTable.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";

const NoteTable = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="overflow-hidden bg-white/20 rounded-lg shadow-md">
      <table className="table-auto w-full text-left text-gray-100">
        <thead className="bg-indigo-500/90">
          <tr>
            <th className="px-6 py-3">Title</th>
            <th className="px-6 py-3">Note</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <tr key={note.id} className="border-t border-gray-700 hover:bg-indigo-500/30 transition-all">
              <td className="px-6 py-3">{note.title}</td>
              <td className="px-6 py-3">{note.note}</td>
              <td className="px-6 py-3 flex gap-3">
                <button className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-md hover:bg-yellow-500" onClick={() => onEdit(note)}>
                  Edit
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={() => onDelete(note.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NoteTable;
