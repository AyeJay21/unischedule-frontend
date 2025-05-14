import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/HomePage.css";

export default function HomePage() {
  return (
    <div className="page-container">
      <h1>Welcome</h1>
      <div className="links-container">
        <Link to="/signup" className="homepage-link">
          Sign Up
        </Link>
        <Link to="/signin" className="homepage-link">
          Sign In
        </Link>
      </div>
    </div>
  );
}
