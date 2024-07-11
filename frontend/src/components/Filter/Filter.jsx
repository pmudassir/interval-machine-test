import React from 'react';
import './filter.css';

const Filter = ({ setFilter }) => {
  return (
    <div className="filter-container">
      <label className="filter-label">Filter by priority:</label>
      <select className="filter-select" onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

export default Filter;
