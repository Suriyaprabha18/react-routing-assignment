import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="page">
      <h1>About This App</h1>
      <p>
        This application is built using React and React Router to demonstrate
        multi-page navigation.
      </p>
      <Link to="/" className="btn">Back to Home</Link>
    </div>
  );
}

export default About;
