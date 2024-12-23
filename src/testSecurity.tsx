import React, { useState, JSX } from "react";
import { useNavigate } from "react-router-dom";

function Login(): JSX.Element {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        navigate("/homepage"); // Weiterleitung bei Erfolg
      } else if (response.status === 401) {
        console.error("Login failed: Unauthorized");
        navigate("/error"); // Weiterleitung bei Fehler
      } else {
        console.error("Unexpected error:", response.status);
        navigate("/error"); // Weiterleitung bei unerwarteten Fehlern
      }
    } catch (error) {
      console.error("Error connecting to the server:", error);
      navigate("/error"); // Weiterleitung bei Serverfehlern
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
