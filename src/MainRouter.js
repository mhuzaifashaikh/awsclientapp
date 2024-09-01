import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Clients from './Clients'; // Your clients component
import App from './App'; // Your main authenticated app component
import AddClient from './AddClient';

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Main authenticated app */}
        <Route path="/clients" element={<Clients />} />  
        <Route path="/addClient" element={<AddClient />} /> 
      </Routes>
    </Router>
  );
}

export default MainRouter;
