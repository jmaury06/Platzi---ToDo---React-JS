import './Components/layout.css'
import { useState } from 'react';
import useLocalStorage from './Hooks/useLocalStorage';
import AppUI from './AppUI';

// const DEFAULTTODOS = [
//   { text: 'learn english', completed: false },
//   { text: 'learn frontend', completed: false },
//   { text: 'learn backend', completed: false },
//   { text: 'learn loquesea', completed: true },
//   { text: 'learn kitchen', completed: false },
// ]

// localStorage.setItem('TODOS_V1', DEFAULTTODOS)
// localStorage.removeItem('TODOS_V1')

function App() {

  const nameItem = ('TODOS_V1')

  const { item: todos, saveItem: setTodos, loading, error } = useLocalStorage(nameItem, [])
  const [openModal, setIsModalOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const completedTodos = todos.filter(item => item.completed).length
  const totalTodos = todos.length

  const addNewTodo = (newTodo) => {
    const newArray = [...todos, newTodo]
    setTodos(newArray)
    setIsModalOpen(false);
  };

  const removeTodo = (value) => {
    const copyTodoList = [...todos]
    const newArray = copyTodoList.filter(item => item.text !== value)
    setTodos(newArray);
    setIsModalOpen(false);
  };

  const toggleComplete = (index) => {
    const copyTodoList = [...todos]
    copyTodoList[index].completed = !copyTodoList[index].completed;
    setTodos(copyTodoList);
  };

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()
    return todoText.includes(searchText.toLowerCase())
  })

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      removeTodo={removeTodo}
      toggleComplete={toggleComplete}
      openModal={openModal}
      addNewTodo={addNewTodo}
      setIsModalOpen={setIsModalOpen}
    />
  );
}

export default App;
