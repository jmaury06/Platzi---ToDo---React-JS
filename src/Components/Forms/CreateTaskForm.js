import React, { useContext, useState } from 'react'
import { AppContext } from '../../Context';
import Button from '../chore/Button';
import { toast, Bounce } from 'react-toastify';

export const CreateTaskForm = ({ isModal }) => {
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
    toast.success('The task has been created successfully', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
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
    <div className='flex flex-col items-center justify-center p-6 bg-slate-600 md:bg-slate-400/60 size-full rounded-xl md:max-w-[400px] md:m-auto'>
      <h2 className='text-white text-2xl'> Create a New Task</h2>
      <form onSubmit={handleSubmit} className='flex flex-col mt-4 w-full space-y-6'>
        <label>
          <span className='text-slate-300'>Create a New Task</span>
          <input
            type="text"
            placeholder='write the new task here'
            value={newTodoText}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            required
            className='flex w-full text-md text-slate-600 p-2 rounded-md outline-none shadow-md shadow-slate-400/70'
          />
        </label>
        <div className={`flex px-2 ${isModal ? 'justify-between' : 'justify-end'}`}>
          {isModal && <button variant={'secondary'} className='text-slate-300' onClick={handleClose}>Cancel</button>}
          <Button variant={'primary'} type="submit">Submit</Button>
        </div>
      </form>
    </div>
  )
}
