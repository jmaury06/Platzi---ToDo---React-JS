const TodoSkeleton = () => {
  return (
    <li
      className={`
        flex 
        w-full
        justify-between 
        items-center 
        rounded-lg 
        p-2
        gap-y-4
        h-10
        bg-slate-300/30
        animate-pulse
        gap-x-2
      `}>
      <div className="rounded-full size-4 bg-slate-300/30 animate-pulse" />
      <div className='flex-1 rounded-lg cursor-pointer h-4 bg-slate-300/30 animate-pulse'></div>
      <div className='size-3 bg-slate-300/30 animate-pulse'></div>
    </li>
  )
}

export default TodoSkeleton

