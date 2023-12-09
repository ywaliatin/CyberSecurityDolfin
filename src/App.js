import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // Ensure this path is correct
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Homepage" element={<HomePage />} />
        {/* Define other routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
