import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EmpireDashboard.css';

const EmpireDashboard = () => {
  const [revenue] = useState(750000);
  const [productionRate] = useState(80);
  const [efficiency] = useState(75);
  const [riskLevel] = useState(40);

  // Dynamic risk button class for color change
  const getRiskButtonClass = () => {
    if (riskLevel >= 80) return "nav-button risk-btn-high";
    if (riskLevel >= 50) return "nav-button risk-btn-medium";
    return "nav-button risk-btn-low";
  };

  return (
    <div className="dashboard-container">
      
      {/* Title */}
      <h2>Empire Dashboard</h2>
      <hr className="divider" />

      {/* Taskbar */}
      <div className="taskbar">
        <Link to="/operations" className="nav-button operations-btn">Manage Operations</Link>
        <Link to="/risk" className={getRiskButtonClass()}>Risk System</Link>
        <Link to="/achievements" className="nav-button achievements-btn">🏆 Achievements</Link>
        <Link to="/analytics" className="nav-button analytics-btn">📊 Analytics</Link>
        <Link to="/settings" className="nav-button settings-btn">⚙️ Settings</Link>
      </div>

      {/* Key Stats Grid */}
      <div className="stats-grid">
        <div className="stat-box">
          <h3>Total Revenue</h3>
          <p>${revenue.toLocaleString()}</p>
        </div>

        <div className="stat-box">
          <h3>Meth Production Rate</h3>
          <p>{productionRate}% per batch</p>
        </div>

        <div className="stat-box">
          <h3>Distribution Efficiency</h3>
          <p>{efficiency}% delivered</p>
        </div>

        <div className="stat-box risk-box">
          <h3>Law Enforcement Risk</h3>
          <p>{riskLevel}% Wanted Level</p>
        </div>
      </div>
    </div>
  );
};

export default EmpireDashboard;
