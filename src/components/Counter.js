import React from 'react';


class Counter extends React.Component {
  constructor(){
    super()
    this.state={
      contador: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(prevState => {
        return {
          contador: prevState.contador + 1
        }
    })

  }

  render(){

    return(
      <div>
      <h1>{this.state.contador}</h1>
      <button onClick={this.handleClick}> Cambiar </button>
      </div>
    )

  }
}

export default Counter
