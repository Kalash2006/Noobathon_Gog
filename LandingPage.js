import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1 className="title">Welcome To Breaking Empire...</h1>
      <Link to="/dashboard">
        <button className="start-button">Start Empire</button>
      </Link>
    </div>
  );
};

export default LandingPage;
