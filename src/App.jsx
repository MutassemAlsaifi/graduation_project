import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './components/pages/HomePage';
import ServicesPage from './components/pages/ServicesPage';
import ServiceDetailsPage from './components/services/ServiceDetailsPage';
import AddServicePage from './components/pages/AddServicePage';
import EditServicePage from './components/pages/EditServicePage';

function App() {

  return (

      <main className="min-h-screen bg-[#f8faf8] text-slate-900">
        
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/addService" element={<AddServicePage  />} />
             <Route path="/services/:id" element={<ServiceDetailsPage />} />
             <Route path="/services/:id/edit" element={<EditServicePage />} />
          </Routes>
        
      </main>
 
  );
}

export default App
