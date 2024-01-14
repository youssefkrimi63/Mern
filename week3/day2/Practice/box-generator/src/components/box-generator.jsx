import React, { useState } from 'react';
import './BoxContainer.css'; 

const BoxContainer = () => {
  const [boxes, setBoxes] = useState([]);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [boxCount, setBoxCount] = useState(1);//optional

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
//optional
  const handleBoxCountChange = (e) => {
    setBoxCount(e.target.value);
  };

  const addBoxes = (e) => {
    e.preventDefault();
    const newBoxes = [];

    for (let i = 0; i < boxCount; i++) {
      const newBox = {
        color: color,
        size: size !== '' ? `${size}px` : '100px' 
      };
      newBoxes.push(newBox);
    }

    setBoxes([...boxes, ...newBoxes]);
    setColor('');
    setSize(''); 
    setBoxCount(1);// optional
  };

  return (
    <div>
      <form onSubmit={addBoxes}>
        <label>
          Color:
          <input type="text" value={color} onChange={handleColorChange} />
        </label>
        <label>
          Size :
          <input type="number" value={size} onChange={handleSizeChange} />
        </label>
        

        <label>
            {/* This is my optional  */}
          Number of Boxes:
          <input type="number" value={boxCount} onChange={handleBoxCountChange} />
          
        </label>
        <button type="submit">Add Box</button>
      </form>
      
      <div className="box-container">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: box.color, width: box.size, height: box.size }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BoxContainer;
