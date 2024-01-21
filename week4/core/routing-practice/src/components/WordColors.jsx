import React from 'react';
import { useParams } from 'react-router-dom';

function WordColors() {
  const { thisword, color, background } = useParams();

  return (
    <div>
      <h1 style={{ backgroundColor: background, color: color }}>
        The Word is : {thisword}
      </h1>
    </div>
  );
}

export default WordColors;
