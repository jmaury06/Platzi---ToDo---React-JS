import { useContext } from 'react'
import { AppContext } from '../../Context'

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(AppContext)
  return (
    <div className='flex justify-center items-center py-8'>
      <h1 className='text-lg md:text-2xl font-bold text-slate-300'>
        Has completado <span className={`${completedTodos > 0 && 'text-cyan-300'}`}>{completedTodos}</span> de {totalTodos} TODOS
      </h1>
    </div>
  )
}

export default TodoCounter