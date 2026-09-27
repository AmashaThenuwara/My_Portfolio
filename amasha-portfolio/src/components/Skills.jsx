import React from 'react';
import { FaCode, FaPalette, FaServer, FaMobileAlt, FaDatabase, FaTools } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const categories = [
    {
      icon: <FaServer />,
      title: "Backend & Laravel Development",
      description: "Engineering MVC architectures, robust APIs, Eloquent ORM, and secure backend workflows",
      skills: ["Laravel", "PHP", "RESTful APIs", "MVC Architecture", "Authentication / JWT", "Blade", "Spring Boot"]
    },
    {
      icon: <FaPalette />,
      title: "UI/UX & Frontend Design",
      description: "Human-centered interfaces, wireframing, component-driven layouts, and responsive design",
      skills: ["UI/UX Design", "HTML5 & CSS3", "Tailwind CSS", "React.js", "Responsive Design", "Bootstrap 5", "Wireframing", "Vite"]
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Development (Kotlin)",
      description: "Native Android engineering, modern declarative UIs, and offline-first persistence",
      skills: ["Kotlin", "Jetpack Compose", "Android Native", "CameraX", "Room Database", "Retrofit", "Material 3"]
    },
    {
      icon: <FaCode />,
      title: "Programming Languages",
      description: "Core languages for backend logic, mobile apps, and interactive web architecture",
      skills: ["PHP", "Kotlin", "Java", "JavaScript (ES6+)", "Python", "SQL"]
    },
    {
      icon: <FaDatabase />,
      title: "Databases & Storage",
      description: "Relational schema design, real-time cloud data, and mobile SQLite caching",
      skills: ["MySQL", "Firebase Realtime DB", "PostgreSQL", "Room DB (SQLite)", "MongoDB"]
    },
    {
      icon: <FaTools />,
      title: "Developer Workflow & Tools",
      description: "Version control, mobile IDEs, API testing, package management, and deployment",
      skills: ["Git", "GitHub", "Android Studio", "VS Code", "Postman", "Composer", "npm", "Vercel"]
    }
  ];

  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <span className="section-subtitle">Technical Competencies</span>
        <h2 className="section-title">Skills & Tech Stack</h2>
        <p className="section-description">
          A balanced technical toolkit encompassing frontend polish, backend resilience, database modeling, and embedded systems.
        </p>
      </div>

      <div className="skills-categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="glass-panel skill-category-card">
            <div className="category-header">
              <div className="category-icon-box">
                {category.icon}
              </div>
              <div>
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
              </div>
            </div>

            <div className="skill-pills-wrap">
              {category.skills.map((skill, i) => (
                <span key={i} className="tech-badge skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
