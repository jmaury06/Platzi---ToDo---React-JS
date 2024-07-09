import './TodoItem.css'
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";

function TodoItem({ index, text, completed, removeTask, taskCompleted }) {
  return (
    <li key={index}>
      <span className={`todo-state ${completed ? 'completed' : ''}`} onClick={() => taskCompleted(index)}>
        {completed ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked />}
      </span>
      <p className={`todo-task ${completed ? 'completed' : ''}`}>{text}</p>
      <span className='todo-close' onClick={() => removeTask(text)}>+</span>
    </li>
  )
}

export default TodoItem