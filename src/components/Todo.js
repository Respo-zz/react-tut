import React from 'react';
import './style/Main.css';

import { motion } from "framer-motion"

import MyComponent from "./motion.js"


//import {Joke, JokeComponents} from "./Joke";

//Import Data
import TodosData from "./data/todosData";
import TodoList from "./TodoList";


class ToDo extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: TodosData,
      isLoading: true
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todos => {
        if (todos.id === id) {
          todos.completed = !todos.completed
        }
        return (todos)
      })
      return {
        todos:updatedTodos
      }
    })
  }

  render() {
    //Parse Data
    const TodoComponents = this.state.todos.map(toDo => {
        return (
        <TodoList key={toDo.id} todoDetail={toDo} handleChange={this.handleChange}/>
        )
    })

        return (
          <div>
          <motion.div
            animate={{ scale: 2 }}
            transition={{ duration: 0.5 }}
          />
          {TodoComponents}</div>
        )
    }
}



export default ToDo;
