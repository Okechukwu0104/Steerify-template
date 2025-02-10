
import React from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <TrustedBy />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
