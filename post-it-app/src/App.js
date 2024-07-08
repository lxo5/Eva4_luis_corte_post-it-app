import React, { useState } from 'react';
import AddNoteForm from './components/AddNoteForm';
import NoteList from './components/NoteList';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="App">
      <h1>Post It App</h1>
      <AddNoteForm onAddNote={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
};

export default App;
