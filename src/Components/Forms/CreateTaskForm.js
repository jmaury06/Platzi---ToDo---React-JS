import React, { useState } from 'react'
import './Forms.css'

export const CreateTaskForm = ({ addTodo, onClose }) => {
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
    <>
      <h2>Create New Task</h2>
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
    </>
  )
}
