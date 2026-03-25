import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#" onClick={(e) => {
          e.preventDefault();
          handleScroll('home');
        }}>
          Survesh <span className="brand-highlight">Pandit</span>
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} 
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll('home');
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} 
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll('skills');
                }}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} 
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll('experience');
                }}
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} 
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll('projects');
                }}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll('contact');
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;