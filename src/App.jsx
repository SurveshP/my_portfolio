import React from 'react';
// Import Bootstrap CSS first
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JS for navbar toggle functionality
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

// Import all components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <footer className="footer">
        <div className="container">
          <p>© 2024 Survesh Pandit. All rights reserved. | Built with React & Bootstrap</p>
        </div>
      </footer>
    </div>
  );
}

export default App;