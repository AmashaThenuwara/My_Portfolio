import React, { useState } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaPlay, FaTimes } from 'react-icons/fa';

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const projects = [
    {
      title: "Smart AI-Based Factory Safety Monitoring",
      subtitle: "HND Final Project | 2026",
      description: "Real-time safety monitoring app using Kotlin and Jetpack Compose. Programmed ESP32-CAM for IoT sensor data. Deployed AI/ML models (PPE detection, fire anomaly) using TensorFlow Lite.",
      tech: ["Kotlin", "Firebase", "TensorFlow Lite", "ESP32", "Python"]
    },
    {
      title: "Clothing Brand E-Commerce Platform",
      subtitle: "Diploma Final Project | 2024",
      description: "Full-stack e-commerce web application with authentication, product management, and order tracking. Built with responsive interfaces.",
      tech: ["Laravel", "MySQL", "PHP", "Bootstrap", "JavaScript"]
    },
    {
      title: "AgriScout - Agriculture App",
      subtitle: "Academic Project | 2026",
      description: "Offline-first Android application integrating CameraX, GPS, Weather APIs, and PDF/CSV export functionality.",
      tech: ["Kotlin", "Jetpack Compose", "Room Database", "Retrofit"]
    },
    {
      title: "Health Detection Smart Watch",
      subtitle: "Cybots 2025 Exhibition",
      description: "IoT-based smart wearable for real-time health monitoring including heart rate, oxygen level, body temperature, and ECG.",
      tech: ["ESP32", "IoT", "Sensors", "Embedded Systems"]
    },
    {
      title: "TwinTrek Flip Game",
      subtitle: "Unleash Your Memory, Conquer the Boards!",
      description: "A full-stack memory matching game with global leaderboards, dynamic difficulty, combo multipliers, and rich player profiles.",
      tech: ["React", "Vite", "Tailwind CSS", "Spring Boot", "Hibernate", "MySQL"],
      demoVideo: "/assets/TwinTrek/TwinTrek_Video_Demo.mp4"
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="glass-panel project-card">
            <h3>{project.title}</h3>
            <p className="project-subtitle text-gradient">{project.subtitle}</p>
            <p className="project-desc text-muted">{project.description}</p>
            
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            
            {project.demoVideo && (
              <div style={{ marginTop: '1.5rem' }}>
                <button 
                  className="btn-secondary" 
                  onClick={() => setSelectedVideo(project.demoVideo)}
                >
                  <FaPlay /> Watch Demo
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal-overlay" onClick={() => setSelectedVideo(null)}>
          <div className="video-modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setSelectedVideo(null)}>
              <FaTimes /> Close
            </button>
            <video 
              src={selectedVideo} 
              controls 
              autoPlay
              controlsList="nodownload" 
              className="no-save-video" 
              onContextMenu={(e) => e.preventDefault()} 
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
