import React, { useState } from "react";
import "../styles/Login.css";
import logo from "../assets/logo.png";   // Make sure logo is in src/assets/logo.png

function Login({ onLogin }) {
  const [userType, setUserType] = useState("student");
  const [reg, setReg] = useState("");
  const [pass, setPass] = useState("");

  const checkLogin = () => {
    const trimmedReg = reg.trim();
    const trimmedPass = pass.trim();

    if (userType === "student" && trimmedReg === "123" && trimmedPass === "sun2025") {
      onLogin("student");
    } else if (userType === "staff" && trimmedReg === "107" && trimmedPass === "sun2025") {
      onLogin("staff");
    } else {
      alert("❌ Invalid credentials! Please check your Register Number and Password.");
    }
  };

  return (
    <div className="login-bg">
      <div className="login-box">
        {/* Logo */}
        <img src={logo} alt="Smart Portal Logo" className="login-logo" />

        <h2>Smart Portal Login</h2>

        {/* Select User Type */}
        <select 
          value={userType} 
          onChange={(e) => setUserType(e.target.value)}>
          <option value="" disabled>Select User Type</option>
          <option value="student">Student</option>
          <option value="staff">Staff</option>
        </select>

        {/* Register Number */}
        <input
          type="text"
          placeholder="Enter Register Number"
          value={reg}
          onChange={(e) => setReg(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        {/* Login Button */}
        <button onClick={checkLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
