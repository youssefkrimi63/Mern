import React from 'react';
import Tabs from './components/form'; 
import './App.css';
const App = () => {
  const tabs = [
    { label: 'Tab 1', content: <div>Content for Tab 1</div> },
    {label: 'Tab 2', content: <div>Content for Tab 2</div>, },
    { label: 'Tab 3', content: <div>Content for Tab 3</div> },
  ];

  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;


