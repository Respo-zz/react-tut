import React from 'react';
import './style/Header.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Counter from "./Counter"
import Login from "./Login"
import ApiCall from "./ApiCall"
import Form from "./Form"
import ToDo from "./Todo"

class Header extends React.Component {
  render(){
  return (
    <Router>
    <nav>
      <ul>
        <li> <Link to="/">ToDo</Link> </li>
        <li> <Link to="/counter">Counter</Link> </li>
        <li> <Link to="/apicall">Api Call</Link> </li>
        <li> <Link to="/form">Form</Link> </li>
      </ul>
    </nav>

    <div className="container">
      <div className="component-box">
      <Route path="/" exact component={ToDo} />
      <Route path="/counter/" component={Counter} />
      <Route path="/apicall/" component={ApiCall} />
      <Route path="/form/" component={Form} />
      </div>
    </div>
    </Router>
  )
}

}

export default Header;
