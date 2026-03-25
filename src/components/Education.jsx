import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "LNCT, Bhopal",
      duration: "2019 – 2021",
      percentage: "82%",
      description: "Specialized in Advanced Web Development, Database Management, and Software Engineering"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "BSSS, Bhopal",
      duration: "2016 – 2019",
      percentage: "78%",
      description: "Studied Programming Fundamentals, Data Structures, Web Technologies, and Database Systems"
    }
  ];

  return (
    <section className="education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic journey</p>
        </div>
        
        <div className="education-grid">
          {education.map((edu, index) => (
            <div className="education-card" key={index}>
              <div className="education-icon">
                <span>{edu.degree === "Master of Computer Applications (MCA)" ? "🎓" : "📘"}</span>
              </div>
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <div className="education-institution">{edu.institution}</div>
                <div className="education-duration">{edu.duration}</div>
                <div className="education-percentage">
                  <span className="percentage-badge">{edu.percentage}</span>
                </div>
                <p className="education-description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;