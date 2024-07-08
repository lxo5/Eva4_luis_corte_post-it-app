import React, { useState } from 'react';

const AddNoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isImportant, setIsImportant] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() === '') return;
    onAddNote({
      id: Date.now(),
      title,
      description,
      isImportant
    });
    setTitle('');
    setDescription('');
    setIsImportant(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Título" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <textarea 
        placeholder="Descripción (obligatorio)" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        required 
      />
      <label>
        <input 
          type="checkbox" 
          checked={isImportant} 
          onChange={(e) => setIsImportant(e.target.checked)} 
        />
        Importante
      </label>
      <button type="submit">Agregar Nota</button>
    </form>
  );
};

export default AddNoteForm;
