import { MdRadioButtonUnchecked, MdRadioButtonChecked, MdDeleteForever } from "react-icons/md";

function TodoItem({ index, text, completed, removeTask, taskCompleted }) {
  return (
    <li
      key={index}
      className={`
        flex 
        w-full
        justify-between 
        items-center 
        ${!completed ? 'bg-slate-600/60' : 'bg-slate-300/30'} 
        ${!completed ? 'text-slate-300 ' : 'text-cyan-300/50'} 
        rounded-lg 
        p-2
        gap-y-4
      `}>
      <span className='flex w-1/12 justify-center cursor-pointer' onClick={() => taskCompleted(index)}>
        {completed ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked />}
      </span>
      <p className={`flex-auto cursor-pointer ${completed && 'line-through'}`}>{text}</p>
      <MdDeleteForever
        className={`hover:text-rose-300 cursor-pointer`} onClick={() => removeTask(text)}
      />
    </li>
  )
}

export default TodoItem