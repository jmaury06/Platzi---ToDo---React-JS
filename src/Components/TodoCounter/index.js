import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../Context'
import { toast, Bounce } from 'react-toastify';
import ConfettiExplosion from 'react-confetti-explosion';

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(AppContext)
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    if (completedTodos && completedTodos === totalTodos) {
      setIsExploding(true)
      toast.success('You have completed all tasks', {
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
      setTimeout(() => {
        setIsExploding(false)
      }, 2000);
    }
  }, [completedTodos, totalTodos])

  return (
    <div className='flex justify-center items-center py-8'>
      {isExploding && <ConfettiExplosion />}

      <h1 className='text-lg md:text-2xl font-bold text-slate-300'>
        Has completado <span className={`${completedTodos > 0 && 'text-cyan-300'}`}>{completedTodos}</span> de {totalTodos} TODOS
      </h1>
    </div>
  )
}

export default TodoCounter