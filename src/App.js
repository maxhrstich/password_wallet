import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Front/Navbar';
import LoginPage from './Front/LoginPage';
import Dashboard from './Front/Dashboard';
import SignUpPage from './Front/SignUpPage.js'; // Assuming you have a SignUpPage component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} /> 
        {/* Protected Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
