import React from 'react'

class ApiCall extends React.Component {
  constructor() {
    super()
    this.state = {
      loading : false,
      ship : {}
    }

  }

  componentDidMount(){
    this.setState ({
      loading: true
    })
    fetch ("https://swapi.co/api/starships/9")
      .then (response => response.json())
      .then (data => {
        this.setState ({ 
              loading : false,
              ship : data
            })
      })

  }

  render(){
    let visits = this.state.ship;
    const text = this.state.loading ? "loading" : this.state.ship.name
    return (
      <div>
      <h1>{text}</h1>
      <ul>
        {Object.keys(visits).map((visit, index) => <li key={index}>{visit} : {visits[visit]}</li>)}
      </ul>
      </div>

    )

  }
}

export default ApiCall
