import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      comments: '',
      topic: 'react'
    };
  }

  handleUserNameChange = event => {
    this.setState({
      userName: event.target.value
    });
  };

  onChnageComments = event => {
    this.setState({
      comments: event.target.value
    });
  };

  onChangetopic = event => {
    this.setState({
      topic: event.target.value
    });
  };

  submitform = event => {
    alert(
      `${this.state.userName}  ${this.state.comments}  ${this.state.topic}`
    );

    event.preventDefault();
  };

  render() {
    const { userName, comments, topic } = this.state;

    return (
      <form onSubmit={this.submitform}>
        <div>
          <label> Username </label>
          <input
            type="text"
            value={userName}
            onChange={this.handleUserNameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={comments}
            onChange={this.onChnageComments}
            cols="20"
            rows="3"
          />
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.onChangetopic}>
            <option value="angular">Angular</option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit"> Submit</button>
      </form>
    );
  }
}

export default Form;
