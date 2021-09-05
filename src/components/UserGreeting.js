import React, { Component } from 'react';

class UserGreetings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    return this.state.isLoggedIn && <div> Hello from userGreetings </div>;
    // if(this.state.isLoggedIn){
    //   return <div>hello Angular</div>
    // }
    // else{
    //   return <div>hello React</div>

    // }
    // return(

    //   <div>

    //     Hello from UserGreeting
    //     </div>
    // )
  }
}

export default UserGreetings;
