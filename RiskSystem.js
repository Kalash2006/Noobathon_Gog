import React, { useState, useEffect } from 'react';
import './RiskSystem.css';

const RiskSystem = () => {
  const [riskLevel, setRiskLevel] = useState(40);

  useEffect(() => {
    if (riskLevel >= 80) {
      alert("🚨 The DEA is onto you! Reduce risk or get caught! 🚨");
    }
  }, [riskLevel]);

  // Increase risk (DEA is getting suspicious)
  const increaseRisk = () => {
    setRiskLevel(prev => Math.min(prev + 10, 100)); // Max risk = 100%
  };

  // Decrease risk (Bribe DEA, move labs, fake IDs)
  const decreaseRisk = () => {
    setRiskLevel(prev => Math.max(prev - 10, 0)); // Min risk = 0%
  };

  return (
    <div className="risk-container">
      <h2>Risk System</h2>
      <p>Current Law Enforcement Risk: {riskLevel}%</p>

      <div className="risk-buttons">
        <button onClick={increaseRisk} className="increase-risk-btn">Increase Risk 🚨</button>
        <button onClick={decreaseRisk} className="decrease-risk-btn">Decrease Risk 🏆</button>
      </div>
    </div>
  );
};

export default RiskSystem;
