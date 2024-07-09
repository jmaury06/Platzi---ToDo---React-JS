import CreateTodoButton from './Components/CreateTodoButton';
import TodoItem from './Components/TodoItem';
import TodoCounter from './Components/TodoCounter';
import TodoList from './Components/TodoList';
import TodoSearch from './Components/TodoSearch';
import Modal from './Components/Modal';
import './Components/layout.css'
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([])
  const [openModal, setIsModalOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const completedTodos = todoList.filter(item => item.completed).length

  const addNewTodo = (newTodo) => {
    const newArray = [...todoList, newTodo]
    setTodoList(newArray)
    setIsModalOpen(false);
  };

  const removeTodo = (value) => {
    const copyTodoList = [...todoList]
    const newArray = copyTodoList.filter(item => item.text !== value)
    setTodoList(newArray);
    setIsModalOpen(false);
  };

  const toggleComplete = (index) => {
    const copyTodoList = [...todoList]
    copyTodoList[index].completed = !copyTodoList[index].completed;
    setTodoList(copyTodoList);
  };

  const searchedTodos = todoList.filter(todo => {
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()
    return todoText.includes(searchText.toLowerCase())
  })

  return (
    <>
      <TodoCounter completed={completedTodos} total={todoList.length} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.length ? searchedTodos.map((todo, index) => {
          const { text, completed } = todo
          return (
            <TodoItem
              index={index}
              text={text}
              completed={completed}
              removeTask={removeTodo}
              taskCompleted={toggleComplete} />
          )
        }) : todoList.length ? 'No se encontraron más resultados' : 'Please, create a new task'}
      </TodoList>
      {openModal && <Modal addTodo={addNewTodo} onClose={() => setIsModalOpen(false)} />}
      <CreateTodoButton openModal={setIsModalOpen} />
    </>
  );
}

export default App;
