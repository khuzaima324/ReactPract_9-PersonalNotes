import React, { useContext } from "react";
import NoteContext from "../context/NoteContext";
import NoteCard from "./NoteCard";

const NotesList = () => {
  const { notes, theme } = useContext(NoteContext);

  return (
    <div className={`p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${theme === "light" ? "bg-white" : "bg-gray-950 text-black"}`}>
      {notes.length === 0 ? (
        <p className="text-black">No notes yet. Add some!</p>
      ) : (
        notes.map(note => <NoteCard key={note.id} note={note} />)
      )}
    </div>
  );
};

export default NotesList;
