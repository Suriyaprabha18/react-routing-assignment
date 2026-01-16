import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1>Welcome to React Routing App</h1>
      <p>This app demonstrates React Router navigation.</p>

      <div className="buttons">
        <Link to="/about" className="btn">Go to About</Link>
        <Link to="/users" className="btn">View Users</Link>
      </div>
    </div>
  );
}

export default Home;
