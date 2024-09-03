import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import OtpLogin from './components/OtpLogin'; // Import other components as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OtpLogin />} />
        <Route path="/home" element={<HomePage />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App;

