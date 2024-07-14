import { useContext } from 'react'
import './TodoCounter.css'
import { AppContext } from '../../Context'

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(AppContext)
  return (
    <h1>Has completado {completedTodos} de {totalTodos} TODOS</h1>
  )
}

export default TodoCounter