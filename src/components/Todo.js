import React from 'react'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Todo = ({task, toggleComplete, deleteTodo}) => {
  return (
    <div className='Todo'>
        <p onClick={() => toggleComplete(task.id)} 
        className={`${task.completed ? 'completed' : ""}`}>
          {task.task}
        </p>
        <div >
            <FontAwesomeIcon icon={faPenToSquare}/>
            <FontAwesomeIcon onClick={() => deleteTodo(task.id)} icon={faTrash}/>
        </div>
    </div>
  )
}
