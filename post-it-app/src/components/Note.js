import React from 'react';

const Note = ({ note, onDelete }) => {
  return (
    <div className={`note ${note.isImportant ? 'important' : ''}`}>
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <button onClick={() => onDelete(note.id)}>X</button>
    </div>
  );
};

export default Note;
