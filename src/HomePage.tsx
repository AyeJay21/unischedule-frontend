import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div>
      <Link to="/signUp" className="">
        Sign Up
      </Link>

      <Link to="/signIn" className="">
        Sign In
      </Link>
    </div>
  );
}
