
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }) {

  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <input type="text" placeholder='filter by text' value={searchValue} onChange={handleChange} />
  )
}

export default TodoSearch