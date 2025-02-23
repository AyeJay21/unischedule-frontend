import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";

export default function SignIn() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/users/signIn",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      if (!response.ok) {
        if (response.status === 404) {
          setError("Email does not exist");
        } else if (response.status === 401) {
          setError("Incorrect email or password");
        } else {
          setError("Sign in failed");
        }
        return;
      }

      const data = await response.json();
      console.log("User signed in:", data);
      navigate("/homepage");
    } catch (error) {
      console.error("Error signing in:", error);
      setError("Sign in failed");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="page-container">
      <h1>Sign In</h1> {/* Überschrift oben */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} className="form-container">
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
        <button type="submit">Submit</button>
      </form>
      <Link to="/signUp" className="signup-link">
        Don't have an account? Sign Up
      </Link> {/* Link unten */}
    </div>
  );
}