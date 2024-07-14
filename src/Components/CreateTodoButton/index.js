import { useContext } from 'react'
import './CreateTodoButton.css'
import { AppContext } from '../../Context'

function CreateTodoButton() {
  const { setIsModalOpen } = useContext(AppContext)
  return (
    <button className='create-task-button' onClick={() => setIsModalOpen(true)}>+</button>
  )
}

export default CreateTodoButton