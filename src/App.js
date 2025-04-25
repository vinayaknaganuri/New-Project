import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Home from './pages/Home.js';
import ReturnAssets from './pages/ReturnAssets.js';
import Login from './pages/Login.js';
import Bengaluru from './pages/Bengaluru.js';
import Pune from './pages/Pune.js';
import Chennai from './pages/Chennai.js';
import Dashboard from './pages/Dashboard.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        {/* Routing */}
        <div className="container mt-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/return-assets-register" element={<ReturnAssets />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bengaluru" element={<Bengaluru />} />
            <Route path="/pune" element={<Pune />} />
            <Route path="/chennai" element={<Chennai />} />
          </Routes>
        </div>

        <Footer /> {/* Add Footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;