import React, {useState} from 'react'

export const TodoForm = () => {

    const [value, setValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(value)
        setValue("")
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" value={value} placeholder='What is the task today?'
         className='todo-input' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
