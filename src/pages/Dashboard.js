import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboar.css'; // You can style the sidebar here

const Dashboard = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-light p-3 sidebar" style={{ minHeight: '100vh', width: '250px' }}>
        <h4>Dashboard</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="./Bengalurudb.js">Bengaluru</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./Punedb.js">Pune</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./Chennaidb">Chennai</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="p-4 flex-grow-1">
        <h2>Welcome to the Asset Dashboard</h2>
        <p>Select a location from the sidebar to register assets.</p>
      </div>
    </div>
  );
};

export default Dashboard;
