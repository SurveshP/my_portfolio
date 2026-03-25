import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Trainee",
      company: "ITSC Technologies Pvt. Ltd",
      location: "Bhopal, India",
      date: "Mar 2025 – Jan 2026",
      responsibilities: [
        "Developed frontend for Fee Management System using React.js and Tailwind CSS, handling student registration and fee payments",
        "Built Team Management Chat UI with real-time communication features, improving team collaboration by 40%",
        "Created complete frontend for NetClinic healthcare platform with appointment booking and data dashboards",
        "Integrated REST APIs for real-time data handling across all platforms"
      ]
    },
    {
      title: "Backend Developer Lead",
      company: "Boostup Digital",
      location: "Bhopal, India",
      date: "Jan 2024 – May 2024",
      responsibilities: [
        "Led backend development for E-Food platform using Node.js, Express, and MongoDB",
        "Improved API performance from 8s to 2.1s (74% improvement) through database optimization",
        "Managed team of 6 developers, conducting code reviews and mentoring junior developers",
        "Built APIs for authentication, cart, orders, and payment processing"
      ]
    },
    {
      title: "Software Developer",
      company: "Furation Tech Solution Pvt. Ltd",
      location: "Bhopal, India",
      date: "Mar 2023 – Oct 2023",
      responsibilities: [
        "Built backend APIs for Agent Rider platform using Node.js (TypeScript) and PostgreSQL",
        "Developed Timer Tracker system for employee attendance and task management",
        "Created POS system backend with transaction workflows and billing logic",
        "Optimized SQL queries, reducing database response time by 35%"
      ]
    },
    {
      title: "Dot Net Developer (Freelancer)",
      company: "Self-Employed",
      location: "Remote",
      date: "Jan 2022 – Feb 2023",
      responsibilities: [
        "Developed Jewellery Management System using ASP.NET and SQL Server",
        "Handled 1000+ monthly transactions with zero data loss",
        "Deployed system on IIS server for multi-user access",
        "Implemented secure authentication and inventory management features"
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">My Journey</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">1.9+ years of professional experience in software development</p>
        </div>
        
        <div className="timeline-wrapper">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot">
                <div className="dot-inner"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                <div className="timeline-company">
                  <span className="company-name">{exp.company}</span>
                  <span className="company-location">{exp.location}</span>
                </div>
                <ul className="timeline-list">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;