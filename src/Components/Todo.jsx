import React from 'react'
function Todo({task , deleteTodo , toggleComplete , editTodo} ) {
  return (
    <div className='Todo'>
        <p className={`${task.completed ? "completed" : "incompleted"}`}onClick={()=>toggleComplete(task.id)}>{task.task}</p>
        <div>
        <i className="fa-solid fa-pen-to-square edit-icon"onClick={()=>editTodo(task.id)}></i>
         <i className="fa-solid fa-trash delete-icon" onClick={()=>deleteTodo(task.id)}></i>
         </div>

         </div>
  )
}

export default Todo;
