import './CreateTodoButton.css'

function CreateTodoButton({ openModal }) {
  return (
    <button className='create-task-button' onClick={() => openModal(true)}>+</button>
  )
}

export default CreateTodoButton