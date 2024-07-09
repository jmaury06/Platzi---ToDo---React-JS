import './TodoCounter.css'

function TodoCounter({ completed, total }) {
  return (
    <h1>Has completado {completed} de {total} TODOS</h1>
  )
}

export default TodoCounter