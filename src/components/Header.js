import React from 'react';
import './style/Header.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Counter from "./Counter"
import Login from "./Login"
import ApiCall from "./ApiCall"
import Form from "./Form"
import ToDo from "./Todo"
import MemeGenerator from "./MemeGenerator"
import {Joke, JokeList} from "./Joke"

class Header extends React.Component {
  render(){
  return (
    <Router>
    <nav>
      <ul>
        <li> <Link className='menu-item'  to="/">ToDo</Link> </li>
        <li> <Link className='menu-item'  to="/counter">Counter</Link> </li>
        <li> <Link className='menu-item'  to="/apicall">Api Call</Link> </li>
        <li> <Link className='menu-item'  to="/form">Form</Link> </li>
        <li> <Link className='menu-item'  to="/login">Login</Link> </li>
        <li> <Link className='menu-item'  to="/jokes">Jokes</Link></li>
        <li> <Link className='menu-item'  to="/memegenerator">MemeGenerator</Link></li>
      </ul>
    </nav>

    <div className="container">
      <div className="component-box">
      <Route path="/" exact component={ToDo} />
      <Route path="/counter/" component={Counter} />
      <Route path="/apicall/" component={ApiCall} />
      <Route path="/login/" component={Login} />
      <Route path="/form/" component={Form} />
      <Route path="/jokes/" component={Joke} />
      <Route path="/memegenerator/" component={MemeGenerator} />

      </div>
    </div>
    </Router>
  )
}

}

export default Header;
