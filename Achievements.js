import React, { useEffect, useState } from 'react';
import './Achievements.css';

const Achievements = ({ revenue = 0 }) => { // Default revenue to 0
  const [empireTier, setEmpireTier] = useState("🥉 Small-Time Dealer");

  // Update Empire Tier Based on Revenue
  useEffect(() => {
    if (revenue >= 1000000) {
      setEmpireTier("👑 Heisenberg’s Empire");
    } else if (revenue >= 500000) {
      setEmpireTier("💎 Drug Lord");
    } else if (revenue >= 250000) {
      setEmpireTier("🔥 Cartel Associate");
    } else if (revenue >= 100000) {
      setEmpireTier("🔹 Jesse’s Street-Level");
    } else {
      setEmpireTier("🥉 Small-Time Dealer");
    }
  }, [revenue]);

  return (
    <div className="achievements-container">
      <h2>Leaderboards & Achievements</h2>

      {/* Revenue Display */}
      <div className="revenue-box">
        <h3>Total Revenue</h3>
        <p>${revenue.toLocaleString()}</p>
      </div>

      {/* Current Empire Tier */}
      <div className="empire-tier">
        <h3>Current Tier:</h3>
        <p>{empireTier}</p>
      </div>

      {/* Leaderboard Section */}
      <div className="leaderboard">
        <h3>Leaderboard</h3>
        <ul>
          <li>🥇 Heisenberg - $5,000,000</li>
          <li>🥈 Gustavo Fring - $3,200,000</li>
          <li>🥉 Tuco Salamanca - $1,800,000</li>
          <li>Walter White - ${revenue.toLocaleString()}</li> {/* Current Player */}
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
