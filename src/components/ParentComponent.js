import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: 'Parent'
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(obj) {
    alert('hello ' + obj);
  }

  render() {
    return <ChildComponent greetHandler={this.greetParent} />;
  }
}

export default ParentComponent;
