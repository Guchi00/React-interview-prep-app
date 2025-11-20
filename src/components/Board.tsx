import React, { useState } from "react";
import "./Board.css";

const initalTabState = [
  "Auto-Completed",
  "Infinite-Scroll",
  "Star-Rating",
  "Multi-Select",
  "Data-Table",
  "Form-Validation",
  "Undo/Redo",
  "Accordion",
  "Carousel",
  "Tag-Input",
];

export const Board = () => {
  const [tabs, setTabs] = useState<string[]>(initalTabState);
  const [activeTab, setActiveTab] = useState(initalTabState[0]);

  const handleActiveTabs = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="parent_container">
      <div className="board_header">
        <h1 className="title">React Interview Feature</h1>
        <p className="sub_title">
          Visual mockups with detailed context for each feature
        </p>
      </div>

      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            className={`tab ${activeTab === tab ? "active" : ""}`}
            key={index}
            onClick={() => handleActiveTabs(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div>
        <p>I am an active {activeTab}</p>
      </div>
    </div>
  );
};
