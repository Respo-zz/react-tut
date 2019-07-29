import React from 'react';

class Login extends React.Component {

    constructor(){
        super()
        this.state = {
            isLoggedIn : false
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState(
            (prevState => {
                return {
                  isLoggedIn : !prevState.isLoggedIn
                }
            })
        )
    }

    render(){
        return (
            <div>
                {this.state.isLoggedIn ? <p> you are logged in </p> : <p> you are logged out </p>}
                <button onClick={this.clickHandler}> {this.state.isLoggedIn ? "log Out" : "log In"} </button>
            </div>
        )
    }

}

export default Login
