import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './components/pages/HomePage';
import ServicesPage from './components/pages/ServicesPage';
import ServiceDetailsPage from './components/services/ServiceDetailsPage';

function App() {

  return (
    <React.StrictMode>

      <main className="min-h-screen bg-[#f8faf8] text-slate-900">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServiceDetailsPage />} />
          </Routes>
        </BrowserRouter>
      </main>
    </React.StrictMode>
  );
}

export default App
