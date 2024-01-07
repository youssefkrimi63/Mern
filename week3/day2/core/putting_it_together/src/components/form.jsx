import React, { useState } from "react";

const Form = (props) => {
  
  const [age, setAge] = useState(props.age);

  
  const addBy1 = () => {
    setAge(age + 1); 
  };

  return (
    <nav>
      <h1>{props.firstName}, {props.lastName}</h1>
      <h4>Age: {age}</h4>
      <h4>Hair color: {props.color}</h4>
      <button onClick={addBy1}>Birthday Button for  {props.firstName} , {props.lastName} </button>
    </nav>
  );
};

export default Form;

