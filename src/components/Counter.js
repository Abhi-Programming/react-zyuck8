import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }
  

  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1
    //   },
    //   () => console.log('Callback Value : ', this.state.count)
    // );

    this.setState(obj => ({
      count: obj.count + 1
    }));

    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
