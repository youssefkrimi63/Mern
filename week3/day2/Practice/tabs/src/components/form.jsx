import React, { useState } from 'react';
import './Tabs.css'; 

const Tabs = ({ tabs }) => {
  const [Tab, setTab] = useState(0);

  const handleTabClick = (index, onClick) => {
    setTab(index);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="tabs-container">
      <div className="tab-headers">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-header ${Tab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index, tab.onClick)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabs[Tab].content}</div>
    </div>
  );
};

export default Tabs;




