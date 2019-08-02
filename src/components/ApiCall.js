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
    const text = this.state.loading ? "loading" : this.state.ship.name
    return (
      <div>
      <h1>{text}</h1>
      <ul></ul>
      </div>

    )

  }
}

export default ApiCall
