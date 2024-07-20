function TodoList({ children }) {
  return (
    <ul className='
      flex 
      flex-col 
      w-5/6
      md:w-3/6 
      m-auto 
      items-center 
      list-none 
      gap-y-2 
      max-h-[570px] 
      overflow-y-auto
    '>
      {children}
    </ul>
  )
}

export default TodoList;
