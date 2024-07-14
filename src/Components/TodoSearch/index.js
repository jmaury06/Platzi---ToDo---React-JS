
import { useContext } from 'react'
import './TodoSearch.css'
import { AppContext } from '../../Context'

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(AppContext)

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <input type="text" placeholder='filter by text' value={searchValue} onChange={handleChange} />
  )
}

export default TodoSearch