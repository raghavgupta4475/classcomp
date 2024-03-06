import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  decrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }
  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
