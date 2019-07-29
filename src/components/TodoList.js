import React from 'react';
import './style/TodoList.css';



// Create component
function TodoList(props) {
  let itemClass = props.todoDetail.completed ? "todo-done" : "todo-item"
  return (
    <div className={itemClass}>
      <input type="checkbox" checked={props.todoDetail.completed} onChange={() => props.handleChange(props.todoDetail.id)}/>
       <p>{props.todoDetail.text}</p>
    </div>
  );
}

export default TodoList
