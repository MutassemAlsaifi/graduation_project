import { useState } from 'react'

import './App.css'
import HomeNavbar from './components/Home/HomeNavbar';
import HeroSection from './components/Home/HeroSection';
import CategoriesSection from './components/Home/CategoriesSection';
import LatestServicesSection from './components/Home/LatestServicesSection';
import HomeFooter from './components/Home/HomeFooter';
import HomePage from './components/pages/HomePage';

function App() {

   return (
    <main className="min-h-screen bg-[#f8faf8] text-slate-900">
     <HomePage></HomePage>
    </main>
  );
}

export default App
