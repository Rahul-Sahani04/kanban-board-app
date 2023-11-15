
import React, { useState } from "react";
import Board from "./components/Board/Board";
import DisplayOptions from "./components/DisplayOptions/DisplayOptions";


const App = () => {
  const [displayOption, setDisplayOption] = useState("By Status"); // Default display option
  const [sortOption, setSortOption] = useState("priority"); // Default sort option

  const handleDisplayChange = (option) => {
    setDisplayOption(option);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  return (
    <div className="app">
      <h1>Kanban Board</h1>
      <DisplayOptions onDisplayChange={handleDisplayChange} />

      <Board displayOption={displayOption} sortOption={sortOption} />
    </div>
  );
};

export default App;
 