import React, { useState } from 'react';
import './Tabs.css'; 

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index, onClick) => {
    setActiveTab(index);
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
            className={`tab-header ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index, tab.onClick)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;




