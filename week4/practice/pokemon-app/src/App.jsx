import React, { useState } from 'react';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

 
  const fetchPokemon = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807');
      const data = await response.json();
      setPokemonList(data.results);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error.message);
    }
  };

  
  fetchPokemon();

  return (
    <div>
      <h1> Pokemon Names</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
