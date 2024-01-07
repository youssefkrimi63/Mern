
import React from "react";
const Form = (props) => {

    return(
   <nav>
    <h1>{props.firstName},{props.lastName}</h1>
    <h4>age:{props.age}</h4>
    <h4>hair color: {props.color}</h4>
   </nav>

    )
}

export default Form;