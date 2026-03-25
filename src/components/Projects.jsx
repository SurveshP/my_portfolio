import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: "🛒 Ecommerce Website",
      description: "Complete full-stack ecommerce platform with product listing, cart functionality, user authentication, payment integration, and optimized checkout flow.",
      achievement: "🎨 Full-stack implementation with React + Node.js",
      type: "fullstack",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Razorpay"],
      github: "https://github.com/surveshpandit/ecommerce-fullstack",
      demo: "#"
    },
    {
      name: "📈 Landing Page Optimization",
      description: "Frontend performance optimization project focusing on code splitting, image optimization, lazy loading, and Core Web Vitals improvement.",
      achievement: "🚀 Improved load time by 35% and achieved 90+ Lighthouse score",
      type: "frontend",
      tech: ["React.js", "Vite", "Lazy Loading", "Code Splitting", "Web Vitals"],
      github: "https://github.com/surveshpandit/landing-optimization",
      demo: "#"
    },
    {
      name: "🛍️ Pick Bazaar",
      description: "Backend APIs for scalable ecommerce platform with product management, cart operations, order processing, and optimized checkout flow.",
      achievement: "🚀 Built scalable backend APIs for ecommerce platform",
      type: "backend",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
      github: "https://github.com/surveshpandit/pick-bazaar-backend",
      demo: "#"
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Real-world applications I've built during my journey</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className={`project-card ${project.type}`} key={index}>
              <div className="project-header">
                <div className="project-icon">
                  {project.type === 'fullstack' && '💯'}
                  {project.type === 'backend' && '⚙️'}
                  {project.type === 'frontend' && '🎨'}
                </div>
                <h3 className="project-title">{project.name}</h3>
                <div className={`project-type-badge ${project.type}`}>
                  {project.type === 'fullstack' && 'Full Stack'}
                  {project.type === 'backend' && 'Backend'}
                  {project.type === 'frontend' && 'Frontend'}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-achievement">
                <span className="achievement-icon">🏆</span>
                <span>{project.achievement}</span>
              </div>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link github" target="_blank" rel="noopener noreferrer">
                  🔗 GitHub
                </a>
                <a href={project.demo} className="project-link demo" target="_blank" rel="noopener noreferrer">
                  🌐 Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;