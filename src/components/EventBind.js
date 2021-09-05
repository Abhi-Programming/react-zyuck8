import React, { Component } from 'react';

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'hello'
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler() {
  //   this.setState({
  //     message: 'Good Bye'
  //   });

  //   console.log(this);

  //   // this.setState(obj => ({
  //   //   message: 'Good Bye'
  //   // }));
  // }

  clickHandler = () => {
    this.setState({
      message: 'Good Bye'
    });
  };
  render() {
    return (
      <div>
        <div> {this.state.message} </div>
        {/* <button onClick={() => this.clickHandler()}> Click EventBind</button> */}
        {/* <button onClick={this.clickHandler.bind(this)}> Click EventBind</button> */}
        <button onClick={this.clickHandler}> Click EventBind</button>
      </div>
    );
  }
}

export default EventBind;
