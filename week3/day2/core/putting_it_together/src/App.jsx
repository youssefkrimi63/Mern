import React, { useState } from 'react';
import Form from './components/form';
import './App.css';

function App() {
  const [age, setAge] = useState(); 

  const incrementAge = (value = 1) => {
    setAge(age + value); 
  };

  return (
    <div className="App">
      <Form
        firstName={'John'}
        lastName={'Doe'}
        age={30} 
        color={'black'}
        incrementAge={incrementAge}
      />
      <Form
        firstName={'Smith'}
        lastName={'john'}
        age={88}
        color={'Brown'}
        incrementAge={incrementAge}
      />
      <Form
        firstName={'Fillmore'}
        lastName={'Millard'}
        age={50}
        color={'Brown'}
        incrementAge={incrementAge}
      />
      <Form
        firstName={'Smith'}
        lastName={'Maria'}
        age={62}
        color={'Brown'}
        incrementAge={incrementAge}
      />
    </div>
  );
}

export default App;
