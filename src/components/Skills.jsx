import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "💻 Languages",
      icon: "🔤",
      skills: ["JavaScript", "TypeScript", "SQL", "C#"]
    },
    {
      title: "⚙️ Backend",
      icon: "🚀",
      skills: ["Node.js", "Express.js", "ASP.NET", "REST APIs"]
    },
    {
      title: "🎨 Frontend",
      icon: "🎨",
      skills: ["React.js", "Vite", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "🗄️ Databases",
      icon: "📊",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "SQL Server"]
    },
    {
      title: "🛠️ Tools",
      icon: "🔧",
      skills: ["Git", "CI/CD", "VS Code", "Postman"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Technical Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Tools and technologies I work with</p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{category.icon}</div>
              <h3 className="skill-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;