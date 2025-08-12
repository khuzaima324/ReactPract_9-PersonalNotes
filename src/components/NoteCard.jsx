import React, { useState, useContext } from "react";
import NoteContext from "../context/NoteContext";

const NoteCard = ({ note }) => {
  const { deleteNote, editNote, theme } = useContext(NoteContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(note.text);

  const handleEdit = () => {
    if (newText.trim()) {
      editNote(note.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <div className={`p-4 rounded shadow ${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"}`}>
      {isEditing ? (
        <textarea
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
      ) : (
        <p>{note.text}</p>
      )}
      <div className="flex gap-2 mt-2">
        {isEditing ? (
          <button onClick={handleEdit} className="px-3 py-1 bg-green-500 text-white rounded">Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="px-3 py-1 bg-blue-500 text-white rounded">Edit</button>
        )}
        <button onClick={() => deleteNote(note.id)} className="px-3 py-1 bg-red-500 text-white rounded">Delete</button>
      </div>
    </div>
  );
};

export default NoteCard;
