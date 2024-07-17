import React, { useContext, useState } from 'react'
import './Forms.css'
import { AppContext } from '../../Context';

export const CreateTaskForm = () => {
  const { addNewTodo, setIsModalOpen } = useContext(AppContext)
  const [newTodoText, setNewTodoText] = useState('');

  const handleChange = (e) => {
    setNewTodoText(e.target.value)
  };

  const handleClose = () => {
    setIsModalOpen(false)
    setNewTodoText('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTodo({
      text: newTodoText,
      completed: false
    });
    handleClose()
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.stopPropagation();
      handleSubmit(e)
    }
  };

  return (
    <div className='form-create-task'>
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Escriba la nueva tarea:
          <input
            type="text"
            value={newTodoText}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            required
          />
        </label>
        <div className='wrap-buttons'>
          <button className='close-button' onClick={handleClose}>CANCEL</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
