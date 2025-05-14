import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/pages/SignIn.css";

export default function SignIn() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if user is already authenticated
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      // If user is authenticated, redirect to timetable
      navigate('/users/timetable');
    }
  }, [navigate]);

  ////////////////////////////////////////////////////////////////////////
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log("Attempting to sign in with:", user);
      
      const response = await fetch("http://localhost:8080/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(user),
      });
      
      console.log("Response status:", response.status);

      if (!response.ok) {
        if (response.status === 404) {
          setError("Username does not exist");
        } else if (response.status === 401) {
          setError("Incorrect username or password");
        } else {
          setError("Sign in failed");
        }
        return;
      }

      const data = await response.json();
      console.log("Raw response data:", data);
      
      // Store user data in localStorage for persistent authentication
      if (data.id) {
        localStorage.setItem('userId', data.id.toString());
      }
      if (data.username) {
        localStorage.setItem('username', data.username);
      }
      if (data.email) {
        localStorage.setItem('email', data.email);
      }
      if (data.roles) {
        localStorage.setItem('roles', JSON.stringify(data.roles));
      }

      // Log the stored data
      console.log("Stored user data:", {
        userId: localStorage.getItem('userId'),
        username: localStorage.getItem('username'),
        email: localStorage.getItem('email'),
        roles: localStorage.getItem('roles')
      });

      // Redirect to the page they tried to visit or timetable
      const from = location.state?.from?.pathname || '/users/timetable';
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Error signing in:", error);
      setError("Sign in failed");
    }
  };
////////////////////////////////////////////////////////////////////////

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="page-container">
      <h1>Sign In</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="Username"
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
      <Link to="/signup" className="signup-link">
        Don't have an account? Sign Up
      </Link>
    </div>
  );
}
