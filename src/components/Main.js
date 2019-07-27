import React from 'react';
import './style/Main.css';

import TodoList from "./TodoList";

function Main() {
  return (
    <div>
      <h1> Contenido Main </h1>
      <div className="todo-list">
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
      </div>
    </div>
  );
}

export default Main;
