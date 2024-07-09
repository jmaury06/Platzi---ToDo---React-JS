import React, { useState } from 'react';
import './Modal.css';

function Modal({ addTodo, onClose }) {
  const [newTodoText, setNewTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      text: newTodoText,
      completed: false
    });
    setNewTodoText('');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <label>
            Escriba la nueva tarea:
            <input
              type="text"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              required
            />
          </label>
          <button type="submit">Submitir</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
