import React, { useState } from 'react';
import axios from 'axios';

const Films = () => {
  const [data, setData] = useState({
    films: [],
  });

  const fetchData = async () => {
    try {
      const [filmsResponse] = await Promise.all([
        axios.get('https://swapi.dev/api/films/'),
      ]);

      setData({
        films: filmsResponse.data.results,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSelectChange = (e) => {
    const selectedFilmName = e.target.value;
    const selectedFilm = data.films.find((film) => film.title === selectedFilmName);

    if (selectedFilm) {
      const filmInfoList = document.getElementById('filmInfo');
      filmInfoList.innerHTML = `
        <li>
          <br />
          <strong>Title:</strong> ${selectedFilm.title}, 
          <strong><br />Director:</strong> ${selectedFilm.director}, 
          <strong><br />Producer:</strong> ${selectedFilm.producer},
          <strong><br />Release Date:</strong> ${selectedFilm.release_date},
          <strong><br />Episode ID:</strong> ${selectedFilm.episode_id},
        </li>
      `;
    }
  };

  return (
    <div  style={{}}>
      <h1>Star Wars Data Fetching</h1>
      <button onClick={fetchData}>Fetch Data</button>

      <div>
        <h2>Films:</h2>
        <label htmlFor="selectFilm">Select a film by title:  </label>
        <select id="selectFilm" onChange={(e) => handleSelectChange(e)}>
          {data.films.map((film, index) => (
            <option key={index} value={film.title}>
              {film.title}
            </option>
          ))}
        </select>

        <ul id="filmInfo">
          {/* Display selected film's information here */}
        </ul>
      </div>
    </div>
  );
};

export default Films;
