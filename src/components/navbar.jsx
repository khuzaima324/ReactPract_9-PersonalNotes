import React, { useContext } from "react";
import NoteContext from "../context/NoteContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(NoteContext);

  return (
    <nav className={`p-4 flex justify-between ${theme === "light" ? "bg-gray-200" : "bg-gray-800 text-white"}`}>
      <div className="flex gap-4">
        <Link to="/" className="font-bold">Notes App</Link>
        <Link to="/about">About</Link>
      </div>
      <button
        onClick={toggleTheme}
        className="px-4 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </nav>
  );
};

export default Navbar;
