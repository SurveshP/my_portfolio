import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Survesh_Pandit_Resume.pdf';
    link.download = 'Survesh_Pandit_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">✨ Welcome to my portfolio</span>
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Survesh Pandit</span>
          </h1>
          <h2 className="hero-subtitle">Backend-Focused Full Stack Developer</h2>
          <p className="hero-description">
            Building scalable, high-performance applications with <strong>Node.js</strong> and <strong>MongoDB</strong>.
            <br />
            🚀 74% performance improvement | 📊 10,000+ daily API requests
          </p>
          <div className="hero-buttons">
            <button onClick={handleDownload} className="btn-primary">
              📄 Download Resume
            </button>
            <a href="#contact" className="btn-secondary">
              💬 Contact Me
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">1.9+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">74%</span>
              <span className="stat-label">Performance Gain</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Daily Requests</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bg-shape"></div>
    </section>
  );
};

export default Hero;