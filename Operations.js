import React, { useState } from 'react';
import './Operations.css';

const Operations = () => {
  const [location, setLocation] = useState("RV");

  const locations = {
    RV: { cost: "$5,000", efficiency: "Low", risk: "High" },
    Superlab: { cost: "$500,000", efficiency: "High", risk: "Low" },
    Warehouse: { cost: "$100,000", efficiency: "Medium", risk: "Medium" }
  };

  return (
    <div className="operations-container">
      <h2>Manage Operations</h2>
      <select onChange={(e) => setLocation(e.target.value)} className="location-dropdown">
        {Object.keys(locations).map((loc) => (
          <option key={loc} value={loc}>{loc}</option>
        ))}
      </select>
      <p>Cost: {locations[location].cost}, Efficiency: {locations[location].efficiency}, Risk: {locations[location].risk}</p>
    </div>
  );
};

export default Operations;
