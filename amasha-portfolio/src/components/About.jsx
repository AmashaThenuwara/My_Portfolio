import React from 'react';
import './About.css';
import { FaGraduationCap, FaCode } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-grid">
        <div className="glass-panel about-summary">
          <p className="text-muted">
            I am a Software Engineering undergraduate with hands-on experience developing full-stack web applications using PHP, Laravel, MySQL, JavaScript, React.js, HTML, CSS, and RESTful APIs.
          </p>
          <br/>
          <p className="text-muted">
            Experienced in developing database-driven applications, implementing CRUD operations, authentication and authorization, API integration, and responsive user interfaces. I have a strong problem-solving mindset with a willingness to learn, work independently, and deliver project requirements within deadlines.
          </p>
        </div>

        <div className="glass-panel education-timeline">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--accent-neon)' }}>
            <FaGraduationCap /> Education
          </h3>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <h4>Higher National Diploma in Software Engineering</h4>
            <span className="text-muted text-sm">National Institute of Business Management (NIBM) | Kandy | 2025 - Present</span>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <h4>Diploma in Software Engineering</h4>
            <span className="text-muted text-sm">NIBM | Kandy | 2024 - 2025</span>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <h4>Advanced Certificate in Spoken English</h4>
            <span className="text-muted text-sm">British Way English Academy | Kandy | 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
