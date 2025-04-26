import React, { useState } from "react";
import "../styles/Tabs.css"; // Tabs ka CSS import kiya

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label); // Pehla tab default active

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`tab-button ${activeTab === tab.label ? "active" : ""}`}
            onClick={() => setActiveTab(tab.label)} // Tab change karne ka function
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tabs-content">
        {tabs.map((tab) => (
          tab.label === activeTab && ( // Sirf active tab ka content dikhe
            <div key={tab.label}>
              {tab.content}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Tabs; // Component export
