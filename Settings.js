import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [mode, setMode] = useState("cooking"); // Default mode: Cooking Mode
  const [purity, setPurity] = useState(75); // Default purity at 75%

  // Toggle between Cooking Mode and Fugitive Mode
  const toggleMode = () => {
    setMode(prevMode => (prevMode === "cooking" ? "fugitive" : "cooking"));
  };

  // Increase Purity (More Revenue, More Risk)
  const increasePurity = () => {
    if (purity < 100) {
      setPurity(prev => prev + 5);
    }
  };

  // Decrease Purity (Less Revenue, Less Risk)
  const decreasePurity = () => {
    if (purity > 50) {
      setPurity(prev => prev - 5);
    }
  };

  return (
    <div className={`settings-container ${mode}`}>
      <h2>Game Settings</h2>
      
      {/* Mode Display */}
      <div className="mode-display">
        <h3>Current Mode: {mode === "cooking" ? "🔥 Cooking Mode" : "🚨 Fugitive Mode"}</h3>
      </div>
      
      {/* Toggle Button */}
      <button onClick={toggleMode} className="toggle-mode-btn">
        {mode === "cooking" ? "Switch to Fugitive Mode" : "Switch to Cooking Mode"}
      </button>

      <hr className="divider" />

      {/* Purity Tracking */}
      <div className="purity-tracking">
        <h3>🧪 Chemical Purity: {purity}%</h3>
        <div className="purity-buttons">
          <button onClick={increasePurity} className="purity-btn increase">Increase Purity 🔼</button>
          <button onClick={decreasePurity} className="purity-btn decrease">Decrease Purity 🔽</button>
        </div>
        <p>{purity >= 90 ? "⚠ High purity attracts DEA attention!" : purity <= 55 ? "📉 Low purity means fewer buyers!" : "🔬 Balanced purity is safer!"}</p>
      </div>
    </div>
  );
};

export default Settings;
