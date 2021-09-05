import React, { Component } from 'react'

export class RefDemo extends Component{

  constructor(props){
    super(props);
    this.ab = React.createRef()

    this.a = null
    this.setCbRef =  element => {
      this.a = element
    }

  }

  componentDidMount(){

  //   if(this.a){
  // this.a.focus()
  //   }
    
     this.ab.current.focus()
  }

  clickHandler= () => {
    console.log("value",this.ab.current.value)
  }

  render(){
    return(
      <div>
      < input type="text"  ref = {this.ab} />
      < input type="text"  ref = {this.setCbRef} />

      <button onClick={this.clickHandler}>click</button>
  
      </div>
    )
  }
}

export default RefDemo