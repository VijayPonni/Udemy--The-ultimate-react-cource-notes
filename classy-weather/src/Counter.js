import React from 'react'

class Counter extends React.Component  {

  constructor(props){
    super(props)

    this.state = {
      count : 5
    }
    
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement(){
    this.setState((currState)=> {
      return {
        count: currState.count -1
      } 
    })

    // this.setState({ count : 0})
  }

  handleIncrement(){
    this.setState((currState) => ({  count : currState.count + 1}) )
  }

  render(){
    const date = new Date('March 31 2001');
    date.setDate(date.getDate() + this.state.count)

    return (<div>
      <button onClick={this.handleDecrement}>-</button>
      <span> {date.toDateString()} {this.state.count}</span>
      <button onClick={this.handleIncrement}>+</button>
    </div>)
  }
}

export default Counter;