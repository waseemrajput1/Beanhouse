import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div style={{ margin: 0, padding: 0 }}>
        <Navbar />
        <Routes>
          {/* Main Home Page - Sirf Hero, About(Home version), aur Team show honge */}
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Team />
            </>
          } />
          
          {/* Separate About Page */}
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;