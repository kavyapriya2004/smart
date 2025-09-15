import React, { useState } from "react";
import Login from "./components/Login";
import Staff from "./components/Staff";
import Student from "./components/Student";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userType) => {
    setUser(userType);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {!user && <Login onLogin={handleLogin} />}
      {user === "staff" && <Staff onLogout={handleLogout} />}
      {user === "student" && <Student onLogout={handleLogout} />}
    </div>
  );
}

export default App;
