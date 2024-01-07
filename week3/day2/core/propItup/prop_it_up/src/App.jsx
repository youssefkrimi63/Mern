
import React from 'react';
import Form from './Components/form';
import './App.css';
 // Asegúrate de que la ruta sea la correcta

function App() {
  return (
    <div className="App">
      <Form   
        firstName={'John'}
        lastName={'Doe'}
        age={30}
        color={'black'}
      />
      <Form   
        firstName={'Smith'}
        lastName={'john'}
        age={88}
        color={'Brown'}
      />

      <Form   
        firstName={'Fillmore'}
        lastName={'Millard'}
        age={50}
        color={'Brown'}
        
      />
      
      <Form   
        firstName={'Smith'}
        lastName={'Maria'}
        age={62}
        color={'Brown'}
      />
      



    </div>
  );
}

export default App;
