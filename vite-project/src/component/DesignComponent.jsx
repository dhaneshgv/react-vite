import React, { Component } from 'react'

export class DesignComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         btnStyle:{
            width : "100px",
            height:"100px",
            border:"2px solid green",
           
            borderRadius:"5px",
            fontsixe:"12px"

         }
      }
    }
  render() {
    return (
      <> 
      <button >Without Css</button>
      <button style={this.state.btnStyle}>With Css</button>
      <button className="button">Style Css</button>
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-dark">new button</button>
      </>
     
    )
  }
}

export default DesignComponent