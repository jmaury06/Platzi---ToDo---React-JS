import { useContext } from 'react'
import { AppContext } from '../../Context'
import { IoMdAdd } from "react-icons/io";


const createTodoButtonStyles = `
flex 
md:hidden 
absolute 
bottom-8 
right-8 
flex 
justify-center 
items-center 
size-16 
border-0 
rounded-full 
bg-cyan-500 
pointer 
transition-transform 
duration-1000 
hover:rotate-180
`

function CreateTodoButton() {
  const { setIsModalOpen } = useContext(AppContext)
  return (
    <button className={createTodoButtonStyles} onClick={() => setIsModalOpen(true)}>
      <IoMdAdd className='size-10' color='white' />
    </button>
  )
}

export default CreateTodoButton