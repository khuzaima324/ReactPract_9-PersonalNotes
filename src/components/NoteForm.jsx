import React, { useContext, useState } from "react";
import NoteContext from "../context/NoteContext";

const NoteForm = () => {
    const { addNote, theme } = useContext(NoteContext);
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addNote(text);
            setText('');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`p-4 flex gap-2 ${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"}`}
        >
            <input
                type="text"
                placeholder="Write a note..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="flex-1 p-2 border rounded"
            />
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Add
            </button>
        </form>
    )
}

export default NoteForm;