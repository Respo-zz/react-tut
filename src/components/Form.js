import React from 'react'

class Form extends React.Component {
  constructor () {
    super()
    this.state = {
      firstName : "",
      lastName : "",
      description: "",
      isFriendly  : false,
      gender : "",
      favColor : ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name] : checked })  :  this.setState({ [name] : value })
  }

  render(){
    return (
      <div>
      <form>
        <input
        type="text"
        value={this.state.firstName}
        name="firstName"
        placeholder="First Name"
        onChange={this.handleChange}
        />
        <br />

        <input
        type="text"
        value={this.state.lastName}
        name="lastName"
        placeholder="First Name"
        onChange={this.handleChange}
        />
        <br />

        <textarea
        name="description"
        value={this.state.description}
        onChange={this.handleChange}
        />
        <br />

        <label>
        <input
        type="checkbox"
        checked={this.state.isFriendly}
        name="isFriendly"
        onChange={this.handleChange}
        /> Is Friendly?
        </label>
        <br />

        <label>
        <input
        type="radio"
        checked={this.state.gender === "male"}
        value="Male"
        name="gender"
        onChange={this.handleChange}
        /> Male
        </label>
        <br />

        <label>
        <input
        type="radio"
        checked={this.state.gender === "female"}
        value="Female"
        name="gender"
        onChange={this.handleChange}
        /> Female
        </label>
        <br />

        <label>Favorite Color:</label>
        <select
        value={this.state.favColor}
        onChange={this.handleChange}
        name="favColor"
        >
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        </select>
        <br />
        <button> Enviar</button>


      </form>
      <div>
      <h1>Nombre: {this.state.firstName} {this.state.lastName}</h1>
      <p> Friendly? {this.state.isFriendly ? "yes" : "no"} </p>
      <p> Gender: {this.state.gender} </p>
      <p> Description: {this.state.description} </p>
      <p> Favorite color: {this.state.favColor} </p>
      </div>
      </div>
    )
  }
}

export default Form
