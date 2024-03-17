// Dashboard.js
import React from "react";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const history = useHistory();

  const handleLogout = () => {
    // Implement your logout logic here
    history.push("/login");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
