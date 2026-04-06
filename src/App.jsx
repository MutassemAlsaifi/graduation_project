import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './components/pages/HomePage';
import ServicesPage from './components/pages/ServicesPage';

function App() {

   return (
    <main className="min-h-screen bg-[#f8faf8] text-slate-900">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
    </main>
  );
}

export default App
