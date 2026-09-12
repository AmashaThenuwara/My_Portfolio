import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      type: "education",
      icon: <FaGraduationCap />,
      title: "Higher National Diploma in Software Engineering (HNDSE)",
      organization: "National Institute of Business Management (NIBM)",
      location: "Kandy, Sri Lanka",
      period: "2025 - Present",
      description: "Focusing on enterprise application architecture, distributed systems, mobile development with Kotlin, and embedded IoT systems. Developing TexyShield (Smart AI-Based Factory Safety Monitoring) as the final capstone project.",
      tags: ["Enterprise App Dev", "Kotlin & Jetpack Compose", "IoT & Embedded Systems", "AI/ML Integration", "Database Architecture"]
    },
    {
      type: "leadership",
      icon: <FaBriefcase />,
      title: "Exhibition Co-Lead & IoT Project Lead",
      organization: "CyBots'25 Tech Exhibition — NIBM",
      location: "Kandy, Sri Lanka",
      period: "2025",
      description: "Co-led event management and project demonstrations for CyBots'25. Engineered and showcased a real-time Health Detection Smart Watch utilizing ESP32, multi-parameter biometric sensors, and wireless telemetry.",
      tags: ["Event Leadership", "IoT Prototyping", "ESP32", "Biometric Telemetry", "Team Coordination"]
    },
    {
      type: "education",
      icon: <FaGraduationCap />,
      title: "Diploma in Software Engineering (DSE)",
      organization: "National Institute of Business Management (NIBM)",
      location: "Kandy, Sri Lanka",
      period: "2024 - 2025",
      description: "Completed comprehensive software engineering training in database design, OOP, and web development. Architected and implemented the StyleAura full-stack e-commerce system with Laravel and MySQL as the final diploma capstone.",
      tags: ["PHP & Laravel", "MySQL", "JavaScript", "REST APIs", "Software Engineering Lifecycle"]
    },
    {
      type: "education",
      icon: <FaGraduationCap />,
      title: "Advanced Certificate in Spoken English",
      organization: "British Way English Academy",
      location: "Kandy, Sri Lanka",
      period: "2023",
      description: "Trained in professional communication, technical presentation delivery, and fluent team collaboration.",
      tags: ["Professional Communication", "Public Speaking", "Collaboration"]
    }
  ];

  return (
    <section id="experience" className="section-container">
      <div className="section-header">
        <span className="section-subtitle">Milestones</span>
        <h2 className="section-title">Experience & Education</h2>
        <p className="section-description">
          A track record of academic excellence, student leadership, and practical engineering milestones.
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        {experiences.map((item, index) => (
          <div key={index} className="timeline-card-wrapper">
            <div className="timeline-node">
              <span className="timeline-icon">{item.icon}</span>
            </div>

            <div className="glass-panel timeline-content-card">
              <div className="timeline-header-row">
                <div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <div className="timeline-org-row">
                    <span className="timeline-org">{item.organization}</span>
                    <span className="timeline-dot-sep">•</span>
                    <span className="timeline-loc"><FaMapMarkerAlt /> {item.location}</span>
                  </div>
                </div>
                <div className="timeline-badge-date">
                  <FaCalendarAlt /> {item.period}
                </div>
              </div>

              <p className="timeline-desc">{item.description}</p>

              <div className="timeline-tags">
                {item.tags.map((tag, i) => (
                  <span key={i} className="tech-badge">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
