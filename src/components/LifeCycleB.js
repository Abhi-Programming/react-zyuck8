import React, { Component } from 'react';

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Abhishek'
    };

    console.log('LifeCycleB constructor ');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycleB from getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('LifeCycleB  componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('lifeCycleB shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifeCycleB getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('LifeCycleB componentDidUpdate');
  }

  render() {
    console.log('LifeCycleB Render');
    return <div />;
  }
}

export default LifeCycleB;
