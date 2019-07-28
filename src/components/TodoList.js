import React from 'react';
import './style/TodoList.css';



// Create component
function TodoList(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.todoDetail.completed} onChange={() => props.handleChange(props.todoDetail.id)}/>
       <p>{props.todoDetail.text}</p>
    </div>
  );
}

export default TodoList
