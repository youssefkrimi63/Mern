import React from 'react';
import { useParams } from 'react-router-dom';

function Word() {
  const { thisword } = useParams();

  return (
    <div>
      <h1>The {isNaN(thisword)? "world" : "number"} is: {thisword}</h1>
    </div>
  );
}

export default Word;
