import React, { useState } from 'react';
import axios from 'axios';

const Planets = () => {
  const [data, setData] = useState({
    planets: [],
  });

  const fetchData = async () => {
    try {
      const [planetsResponse] = await Promise.all([
        axios.get('https://swapi.dev/api/planets/'),
      ]);

      setData({
        planets: planetsResponse.data.results,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSelectChange = (e) => {
    const selectedPlanetName = e.target.value;
    const selectedPlanet = data.planets.find((planet) => planet.name === selectedPlanetName);

    if (selectedPlanet) {
      const planetInfoList = document.getElementById('planetInfo');
      planetInfoList.innerHTML = `
        <li>
          <br />
          <strong>Name:</strong> ${selectedPlanet.name}, 
          <strong><br />Climate:</strong> ${selectedPlanet.climate}, 
          <strong><br />Terrain:</strong> ${selectedPlanet.terrain},
          <strong><br />Population:</strong> ${selectedPlanet.population},
          <strong><br />Gravity:</strong> ${selectedPlanet.gravity},
        </li>
      `;
    }
  };

  return (
    <div>
      <h1>Star Wars Data Fetching</h1>
      <button onClick={fetchData}>Fetch Data</button>

      <div>
        <h2>Planets:</h2>
        <label htmlFor="selectPlanet">Select a planet by name:</label>
        <select id="selectPlanet" onChange={(e) => handleSelectChange(e)}>
          {data.planets.map((planet, index) => (
            <option key={index} value={planet.name}>
              {planet.name}
            </option>
          ))}
        </select>

        <ul id="planetInfo">
          {/* Display selected planet's information here */}
        </ul>
      </div>
    </div>
  );
};

export default Planets;
