import React from 'react'

function FormComponent(props) {
  return (
    <div>
      <form>
        <input
        type="text"
        value={props.data.firstName}
        name="firstName"
        placeholder="First Name"
        onChange={props.handleChange}
        />
        <br />

        <input
        type="text"
        value={props.data.lastName}
        name="lastName"
        placeholder="First Name"
        onChange={props.handleChange}
        />
        <br />

        <textarea
        name="description"
        value={props.data.description}
        onChange={props.handleChange}
        />
        <br />

        <label>
        <input
        type="checkbox"
        checked={props.data.isFriendly}
        name="isFriendly"
        onChange={props.handleChange}
        /> Is Friendly?
        </label>
        <br />

        <label>
        <input
        type="radio"
        checked={props.data.gender === "male"}
        value="Male"
        name="gender"
        onChange={props.handleChange}
        /> Male
        </label>
        <br />

        <label>
        <input
        type="radio"
        checked={props.data.gender === "female"}
        value="Female"
        name="gender"
        onChange={props.handleChange}
        /> Female
        </label>
        <br />

        <label>Favorite Color:</label>
        <select
        value={props.data.favColor}
        onChange={props.handleChange}
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
        <h1>Nombre: {props.data.firstName} {props.data.lastName}</h1>
        <p> Friendly? {props.data.isFriendly ? "yes" : "no"} </p>
        <p> Gender: {props.data.gender} </p>
        <p> Description: {props.data.description} </p>
        <p> Favorite color: {props.data.favColor} </p>
      </div>
    </div>
  )
}

export default FormComponent
