import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      // Option 1: Direct download from public folder
      const link = document.createElement('a');
      link.href = '/Survesh_FullStack_Developer_Resume.pdf';
      link.download = 'Survesh_Pandit_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Success message (optional)
      console.log('Resume download started');
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Unable to download resume. Please contact me directly.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleViewResume = () => {
    // Open resume in new tab
    window.open('/Survesh_FullStack_Developer_Resume.pdf', '_blank');
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
            Building scalable, high-performance applications with <strong>Node.js</strong>, <strong>React</strong>, and <strong>MongoDB</strong>.
            <br />
            🚀 74% performance improvement | 📊 10,000+ daily API requests
          </p>
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