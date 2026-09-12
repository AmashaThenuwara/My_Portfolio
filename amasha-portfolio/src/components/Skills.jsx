import React from 'react';
import { FaCode, FaReact, FaServer, FaMobileAlt, FaDatabase, FaTools } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const categories = [
    {
      icon: <FaCode />,
      title: "Programming Languages",
      description: "Core languages for software architecture, web logic, and mobile engineering",
      skills: ["Java", "JavaScript (ES6+)", "PHP", "Kotlin", "Python", "SQL"]
    },
    {
      icon: <FaReact />,
      title: "Frontend Engineering",
      description: "Building responsive, component-driven, high-performance user interfaces",
      skills: ["React.js", "Vite", "Tailwind CSS", "HTML5 & CSS3", "Blade", "Bootstrap 5", "Responsive UI"]
    },
    {
      icon: <FaServer />,
      title: "Backend & Frameworks",
      description: "Developing robust APIs, MVC applications, and business logic pipelines",
      skills: ["Laravel", "Spring Boot", "Node.js", "RESTful APIs", "Authentication / JWT", "MVC Architecture"]
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile & IoT Systems",
      description: "Android development, hardware telemetry, and edge intelligence",
      skills: ["Jetpack Compose", "Android Native", "ESP32 / ESP32-CAM", "CameraX", "TensorFlow Lite", "IoT Telemetry"]
    },
    {
      icon: <FaDatabase />,
      title: "Databases & Storage",
      description: "Relational modeling, cloud real-time synchronization, and local caching",
      skills: ["MySQL", "Firebase Realtime DB", "PostgreSQL", "MongoDB", "Room Database (SQLite)"]
    },
    {
      icon: <FaTools />,
      title: "Developer Workflow & Tools",
      description: "Version control, API testing, build systems, and development tooling",
      skills: ["Git", "GitHub", "VS Code", "Android Studio", "Postman", "Composer", "npm"]
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
