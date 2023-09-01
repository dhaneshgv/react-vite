import React, { useState } from "react";
import React from 'react'

function About(props){
    const[name,setname]=useState(
        "About function"
    )
    function ClickEvent()
    
    {
        setname("Click in the About")
        console.log("Click Event in function")
    }
    function inputchange(event){
        

    }
  return (
    <div>About
            <b>Name: {props.name}</b> <br></br>
            <b>Work :{props.work}</b> <br></br>
            <b>useraname:{name}</b>   <br></br>
            <button onclick={()=>ClickEvent}>  click </button>
    </div>

  )
}
export default About;