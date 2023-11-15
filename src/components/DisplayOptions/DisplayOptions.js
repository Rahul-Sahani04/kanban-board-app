import "../styles/DisplayOptions.css"
import React from 'react';

const DisplayOptions = ({ onDisplayChange }) => {
  const options = ['By Status', 'By User', 'By Priority'];

  const handleDisplayChange = (selectedOption) => {
    onDisplayChange(selectedOption);
  };

  return (
    <div className="select-dropdown">
      <label style={{marginLeft: "5px"}} htmlFor="displaySelect">Display:</label>
      <select id="displaySelect" onChange={(e) => handleDisplayChange(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DisplayOptions;
