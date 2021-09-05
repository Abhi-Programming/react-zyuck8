import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Abhishek'
    };

    console.log('LifeCycleA constructor A');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycleA from getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('LifeCycleA  componentDidMount');
  }

  shouldComponentUpdate(){
    console.log("lifeCycle A shouldComponentUpdate")
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("LifeCycleA getSnapshotBeforeUpdate")
    return null  
  }

  componentDidUpdate(){
    console.log("LifeCycleA componentDidUpdate")
  }

  changeState = () => {
    this.setState ({
      name:'parmar'
    })

    
  }

  render() {
    console.log('LifeCycleA Render');
    return (
      <div>
      <div> Life Cycle A</div>
      <button onClick={this.changeState}>Change State</button>
      <div>
        <LifeCycleB/>
      </div>
      </div>

    )
  }
}

export default LifeCycleA;
