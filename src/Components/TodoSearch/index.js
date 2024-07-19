
import { useContext } from 'react'
import { AppContext } from '../../Context'

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(AppContext)

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className='flex w-full justify-center items-center mb-10'>
      <input
        type="text"
        placeholder='filter by text'
        value={searchValue}
        onChange={handleChange}
        className='flex w-3/6 text-lg text-slate-600 p-2 rounded-md outline-none shadow-md shadow-slate-400/70' />
    </div>

  )
}

export default TodoSearch