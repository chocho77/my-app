import React, { Component } from 'react'

class UserGreetingThree extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  render() {
    return (
        this.state.isLoggedIn && <div>Welcome, Chavdar!</div>
    )
  }
}

export default UserGreetingThree