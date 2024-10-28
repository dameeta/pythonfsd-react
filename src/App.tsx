import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import {Home}from './Home';
import { About } from './About';
import Dashboard from './Dashboard';


const App: React.FC = () => {
  // Simulate user authentication status
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/dashboard">Dashboard</Link>
        <button onClick={isAuthenticated ? handleLogout : handleLogin}>
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Conditional rendering: if authenticated, render Dashboard, otherwise redirect to Home */}
         <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} /> 
      </Routes>
    </Router>
  );
};

export default App;
