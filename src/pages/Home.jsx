import React, { useContext } from 'react';
import NoteContext from '../context/NoteContext';
import NoteForm from '../components/NoteForm';
import NotesList from '../components/NotesList';

function Home() {
  const { theme } = useContext(NoteContext); 

  return (
    <div 
      className={`${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"} min-h-screen`}
    >
      <NoteForm />
      <NotesList />
    </div>
  );
}

export default Home;
