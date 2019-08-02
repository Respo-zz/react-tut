import React from 'react';
import './style/Header.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Counter from "./Counter"
import Login from "./Login"
import ApiCall from "./ApiCall"
import Form from "./Form"
import ToDo from "./Todo"
import {Joke, JokeList} from "./Joke"

class Header extends React.Component {
  render(){
  return (
    <Router>
    <nav>
      <ul>
        <li> <Link onlyActiveOnIndex className='menu-item' activeClassName='menu-item-active' to="/">ToDo</Link> </li>
        <li> <Link className='menu-item' activeClassName='menu-item-active' to="/counter">Counter</Link> </li>
        <li> <Link className='menu-item' activeClassName='menu-item-active' to="/apicall">Api Call</Link> </li>
        <li> <Link className='menu-item' activeClassName='menu-item-active' to="/form">Form</Link> </li>
        <li> <Link className='menu-item' activeClassName='menu-item-active' to="/jokes">Jokes</Link></li>
      </ul>
    </nav>

    <div className="container">
      <div className="component-box">
      <Route path="/" exact component={ToDo} />
      <Route path="/counter/" component={Counter} />
      <Route path="/apicall/" component={ApiCall} />
      <Route path="/form/" component={Form} />
      <Route path="/jokes/" component={Joke} />

      </div>
    </div>
    </Router>
  )
}

}

export default Header;
