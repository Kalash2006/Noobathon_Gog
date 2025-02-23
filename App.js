import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import EmpireDashboard from './EmpireDashboard';
import Operations from './Operations';
import RiskSystem from './RiskSystem';
import Achievements from './Achievements';
import Analytics from './Analytics';
import Settings from './Settings';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<EmpireDashboard />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/risk" element={<RiskSystem />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
