import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteProvider = (props) => {
    const [notes, setNotes] = useState([]);
    const [theme, setTheme] = useState('light');

    const addNote = (text)=>{
        setNotes([...notes, {id: Date.now(), text}]);
    }
    const deleteNote = (id)=>{
        setNotes(notes.filter(note => note.id != id));
    }
    const editNote = (id, newText) => {
        setNotes(notes.map(note => note.id === id ? { ...note, text: newText } : note));
    };

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };


    return (
        <NoteContext.Provider value= {{notes,setNotes, editNote, deleteNote, theme, setTheme, toggleTheme, addNote}} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteProvider