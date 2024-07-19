import React, { useContext } from 'react'
import TodoCounter from './Components/TodoCounter'
import TodoSearch from './Components/TodoSearch'
import TodoList from './Components/TodoList'
import TodoItem from './Components/TodoItem'
import CreateTodoButton from './Components/CreateTodoButton'
import TodoSkeleton from './Components/TodoItem/TodoSkeleton'
import TodoError from './Components/TodoItem/TodoError'
import EmptyTodos from './Components/TodoItem/EmptyTodos'
import { AppContext } from './Context'
import { CreateTaskForm } from './Components/Forms/CreateTaskForm'
import Modal from 'react-modal'

const AppUI = () => {
  const { openModal, setIsModalOpen, loading, error, searchedTodos, removeTodo, toggleComplete } = useContext(AppContext)

  const customStyles = {
    content: {

      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '100%',
      maxWidth: '450px',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(100, 100, 100, 0)',
      border: 'none'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
  };

  return (
    <div className='flex w-full h-[100vh] justify-around items-center'>
      <div className='hidden md:block w-full max-w-[400px]'>
        <CreateTaskForm />
      </div>

      <div className='h-5/6 w-3/6'>
        <TodoCounter />
        <TodoSearch />

        <TodoList>
          {loading && <TodoSkeleton />}
          {error && <TodoError />}
          {!loading && searchedTodos.length === 0 && <EmptyTodos />}
          {!loading && searchedTodos.length && searchedTodos.map((todo, index) => {
            const { text, completed } = todo
            return (
              <TodoItem
                index={index}
                text={text}
                completed={completed}
                removeTask={removeTodo}
                taskCompleted={toggleComplete} />
            )
          })}
        </TodoList>
        <CreateTodoButton />
        <Modal
          isOpen={openModal}
          style={customStyles}
          contentLabel="Example Modal"
          onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={true}
        >
          <CreateTaskForm isModal />
        </Modal>
      </div>
    </div>
  )
}

export default AppUI