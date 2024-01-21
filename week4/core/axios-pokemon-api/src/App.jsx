import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SomeComponent = (props) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const Pokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
        setPokemonList(response.data.results);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    Pokemon();
  }, []);  

  return (
    <div>
      <h1>All Pokemon Names</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SomeComponent;
