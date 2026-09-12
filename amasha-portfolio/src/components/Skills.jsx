import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "PHP", "Kotlin", "SQL"]
    },
    {
      title: "Frontend Development",
      skills: ["HTML/CSS", "React.js", "Next.js", "Bootstrap", "Tailwind CSS", "Vite"]
    },
    {
      title: "Backend Development",
      skills: ["Laravel", "Spring Boot", "Node.js", "RESTful APIs"]
    },
    {
      title: "Database & Mobile",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Kotlin", "Flutter"]
    }
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="glass-panel skill-category">
            <h3 className="text-gradient">{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
