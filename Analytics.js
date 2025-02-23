import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import "./Analytics.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Analytics = ({ revenueHistory = [], riskLevel = 0 }) => {
  const [riskColor, setRiskColor] = useState("green");

  // Update risk color dynamically
  useEffect(() => {
    if (riskLevel >= 80) setRiskColor("red");
    else if (riskLevel >= 50) setRiskColor("orange");
    else setRiskColor("green");
  }, [riskLevel]);

  // ✅ Ensure revenueHistory is always an array
  const validRevenueHistory = Array.isArray(revenueHistory) ? revenueHistory : [];

  // Revenue Growth Chart Data
  const data = {
    labels: validRevenueHistory.length > 0 ? validRevenueHistory.map((_, index) => `Week ${index + 1}`) : ["No Data"],
    datasets: [
      {
        label: "Revenue ($)",
        data: validRevenueHistory.length > 0 ? validRevenueHistory : [0], // Prevent empty dataset error
        borderColor: "#64ff64",
        backgroundColor: "rgba(100, 255, 100, 0.2)",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="analytics-container">
      <h2>📊 Revenue & Risk Analytics</h2>

      {/* Revenue Growth Chart */}
      <div className="chart-container">
        <h3>Revenue Growth Over Time</h3>
        <Line data={data} />
      </div>

      {/* Risk Meter */}
      <div className="risk-meter">
        <h3>DEA Suspicion Level</h3>
        <div className="risk-bar" style={{ backgroundColor: riskColor, width: `${riskLevel}%` }}>
          {riskLevel}%
        </div>
      </div>
    </div>
  );
};

export default Analytics;
