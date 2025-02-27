import React, { useState } from "react";
import {useNavigate, Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import TimeTable from "./TimeTable";
import "./SignUp.css";

function SignUp() {
  const [user, setUser] = useState({ email: "", password: "", username: "" });
  const navigate = useNavigate(); // Hook initialisieren

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log("User created:", data);
        navigate("/timetable"); // Weiterleitung zur TimeTable-Seite
      })
      .catch((error) => console.error("Error creating user:", error));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="page-container">
      <h1>Sign Up</h1> {/* Überschrift oben */}
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit" onClick={()=> navigate("/timetable")}>Submit</button>
      </form>
      <Link to="/signin" className="signup-link">
        Already have an account? Sign In
      </Link>{" "}
      {/* Link unten */}
    </div>
  );
}

export default SignUp;
