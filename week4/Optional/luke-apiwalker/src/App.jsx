import React from 'react';
import People from "./components/people";
import Films from "./components/films"
import Planets from "./components/planets"
import './App.css';


function App() {
  return (
    <div className="App">
      <People />
      <Films />
      <Planets/>
    </div>
  );
}

export default App;
