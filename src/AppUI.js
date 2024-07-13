import React from 'react'
import TodoCounter from './Components/TodoCounter'
import TodoSearch from './Components/TodoSearch'
import TodoList from './Components/TodoList'
import TodoItem from './Components/TodoItem'
import Modal from './Components/Modal'
import CreateTodoButton from './Components/CreateTodoButton'
import TodoSkeleton from './Components/TodoItem/TodoSkeleton'
import TodoError from './Components/TodoItem/TodoError'
import EmptyTodos from './Components/TodoItem/EmptyTodos'

const AppUI = ({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  removeTodo,
  toggleComplete,
  openModal,
  addNewTodo,
  setIsModalOpen
}) => {
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
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
      {openModal && <Modal addTodo={addNewTodo} onClose={() => setIsModalOpen(false)} />}
      <CreateTodoButton openModal={setIsModalOpen} />
    </>
  )
}

export default AppUI