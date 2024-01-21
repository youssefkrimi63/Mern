import React, { useState } from 'react';
import axios from 'axios';

const People = () => {
  const [data, setData] = useState({
    people: [],
  });

  const fetchData = async () => {
    try {
      const [peopleResponse] = await Promise.all([
        axios.get('https://swapi.dev/api/people/'),
      ]);

      setData({
        people: peopleResponse.data.results,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSelectChange = (e) => {
    const selectedPersonName = e.target.value;
    const selectedPerson = data.people.find((person) => person.name === selectedPersonName);

    if (selectedPerson) {
      const personInfoList = document.getElementById('personInfo');
      personInfoList.innerHTML = `
        <li>
          <br />
          <strong>Name:</strong> ${selectedPerson.name}, 
          <strong><br />Height:</strong> ${selectedPerson.height}, 
          <strong><br />Hair Color:</strong> ${selectedPerson.hair_color},
          <strong><br />Eye Color:</strong> ${selectedPerson.eye_color},
          <strong><br />Skin Color:</strong> ${selectedPerson.skin_color},
        </li>
      `;
    }
  };

  return (
    <div>
      <h1>Star Wars Data Fetching</h1>
      <button onClick={fetchData}>Fetch Data</button>

      <div>
        <h2>People:</h2>
        <label htmlFor="selectPerson">Select a person by name: </label>
        <select id="selectPerson" onChange={(e) => handleSelectChange(e)}>
          {data.people.map((person, index) => (
            <option key={index} value={person.name}>
              {person.name}
            </option>
          ))}
        </select>

        <ul id="personInfo">
          {data.people.length > 0 && (
            <li>
              {/* Display selected person's information here */}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default People;
