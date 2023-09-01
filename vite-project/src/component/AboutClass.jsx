import React, { Component } from 'react'

class AboutClass extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name:this.props.name,
       work:this.props.work,
       count:0
    }
  }
  Clickevent(){
    this.setState({
      name:"About Class Component",
      count:this.state.count +1
    })

  }
  Mousehover(){
    console.log("Mouse click event...")
  }
  inputchange(event){
    console.log(event)
  }
  render() {
    return (
      <div>AboutClass
          <br></br>
          <b>Name:{this.state.name}</b> <br></br>
          <b>Work:{this.state.work}</b> <br></br>
          <b>Work:{this.state.count}</b> <br></br>
          <button onclick={()=>this.Clickevent()} onMouseOver={()=>this.Mousehover()}>  click </button>
        </div>
    )
  }
}

export default AboutClass