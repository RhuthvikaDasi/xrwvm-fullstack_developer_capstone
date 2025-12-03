import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const goHome = () => {
    window.location.href = "/";
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, password, firstName, lastName, email }),
      });

      const json = await res.json();

      if (json.status) {
        sessionStorage.setItem("username", json.userName);
        window.location.href = "/";
      } else if (json.error === "Already Registered") {
        alert("The user with this username is already registered");
        window.location.href = "/";
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (err) {
      console.error("Error during registration:", err);
      alert("Registration failed. Check the console for errors.");
    }
  };

  return (
    <div className="register_container">
      <div className="header">
        <span>Sign Up</span>
        <button onClick={goHome} style={{ float: "right", cursor: "pointer" }}>
          X
        </button>
      </div>

      <form onSubmit={register}>
        <div className="inputs">
          <input
            type="text"
            placeholder="Username"
            className="input_field"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="First Name"
            className="input_field"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input_field"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input_field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input_field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="submit_panel">
          <input className="submit" type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default Register;
