import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment(){
      //  this.setState({
      //          count: this.state.count + 1
      //  },
      //  () => {
      //     console.log('Callback value', this.state.count); 
      //  });
      
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
      console.log(this.state.count);

    }

    incrementFive(){
        this.increment();   // 1 - time
        this.increment();   // 2 - times
        this.increment();   // 3 - times
        this.increment();   // 4 - times 
        this.increment();   // 5 - times
    }

  render() {
    return (
        <div> 
        <div>Count - {this.state.count}
        </div>
        <button onClick={()=> this.incrementFive()}>Increment</button>
       </div>
    )
  }
}

export default Counter