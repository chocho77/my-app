import React, { Component } from 'react'

class UserGreetingTwo extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

  render() {
    return (
      this.state.isLoggedIn ?
      <div>Welcome, Chavdar!</div> :
      <div>Welcome, Guest!</div>
    );
  }
}

export default UserGreetingTwo