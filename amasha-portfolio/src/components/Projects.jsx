import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaPlay, FaTimes, FaLayerGroup, FaAndroid, FaGamepad, FaShoppingBag } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const projects = [
    {
      id: "factory-safety",
      title: "Smart AI-Based Factory Safety Monitoring",
      subtitle: "Industry 4.0 | HND Capstone Project (2026)",
      category: "mobile-iot",
      description: "A real-time worker safety and industrial hazard prevention ecosystem. Integrates ESP32-CAM and environmental sensors with edge AI models (TensorFlow Lite) for PPE compliance detection and fire anomaly detection. Coupled with a modern Android management application built in Kotlin Jetpack Compose and Firebase real-time telemetry.",
      tech: ["Kotlin", "Jetpack Compose", "TensorFlow Lite", "ESP32-CAM", "Firebase", "Python"],
      github: "https://github.com/AmashaThenuwara",
      featured: true,
      badge: "Flagship Project"
    },
    {
      id: "twintrek",
      title: "TwinTrek Flip Game",
      subtitle: "Interactive Web Game & High-Score Platform",
      category: "games",
      description: "A responsive full-stack memory card flip adventure built with React, Vite, and Tailwind CSS. Backed by Spring Boot and MySQL for persistent player scores, combo multipliers, sound effects, dynamic grid difficulties, and global leaderboards.",
      tech: ["React", "Vite", "Tailwind CSS", "Spring Boot", "Hibernate", "MySQL"],
      demoVideo: "/assets/TwinTrek/TwinTrek_Video_Demo.mp4",
      github: "https://github.com/AmashaThenuwara/TwinTrek-flip-game",
      featured: true,
      badge: "Full-Stack + Game"
    },
    {
      id: "agriscout",
      title: "AgriScout - Smart Agriculture Assistant",
      subtitle: "Offline-First Android Farm Telemetry App",
      category: "mobile-iot",
      description: "Modern Android agricultural field companion featuring CameraX image capture for crop disease scouting, GPS geolocation tagging, live weather API synchronization, and local Room database caching with automated CSV/PDF report generation.",
      tech: ["Kotlin", "Jetpack Compose", "CameraX", "Room Database", "Retrofit", "Weather API"],
      github: "https://github.com/AmashaThenuwara/AgriScout_androidapp",
      featured: false,
      badge: "Android Native"
    },
    {
      id: "ecommerce",
      title: "Clothing Brand E-Commerce Platform",
      subtitle: "Diploma Capstone Project (2024)",
      category: "web",
      description: "Production-ready e-commerce web platform engineered with Laravel MVC and MySQL. Features customer authentication, dynamic product catalog, category filters, cart/checkout workflows, and a secure administrative dashboard for inventory and order management.",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap 5", "JavaScript", "Blade"],
      github: "https://github.com/AmashaThenuwara",
      featured: false,
      badge: "Laravel MVC"
    },
    {
      id: "health-watch",
      title: "Health Detection Smart Watch",
      subtitle: "CyBots'25 Tech Exhibition Innovation",
      category: "mobile-iot",
      description: "Wearable healthcare prototype capable of continuous vital sign monitoring. Synchronizes real-time heart rate, blood oxygen (SpO2), body temperature, and ECG waveform data via an ESP32 microcontroller with a client monitoring interface.",
      tech: ["ESP32", "IoT Telemetry", "Biometric Sensors", "Embedded C++", "OLED Display"],
      github: "https://github.com/AmashaThenuwara",
      featured: false,
      badge: "IoT Prototype"
    }
  ];

  const filterTabs = [
    { label: "All Projects", key: "all" },
    { label: "Full-Stack & Web", key: "web" },
    { label: "Mobile & IoT", key: "mobile-iot" },
    { label: "Interactive & Games", key: "games" }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <span className="section-subtitle">Portfolio Work</span>
        <h2 className="section-title">Featured Software Projects</h2>
        <p className="section-description">
          A showcase of full-stack web platforms, embedded IoT systems, and mobile applications built with modern engineering practices.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="project-filter-tabs">
        {filterTabs.map(tab => (
          <button
            key={tab.key}
            className={`filter-tab-btn ${activeFilter === tab.key ? 'active' : ''}`}
            onClick={() => setActiveFilter(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="glass-panel project-card-modern">
            <div className="project-top-row">
              <span className="project-type-badge">{project.badge}</span>
              <div className="project-card-actions">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="card-action-icon"
                    title="View Source on GitHub"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-subtitle-text">{project.subtitle}</p>

            <p className="project-description-text">{project.description}</p>

            <div className="project-tech-badges">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>

            {project.demoVideo && (
              <div className="project-footer-actions">
                <button
                  className="btn-secondary watch-demo-btn"
                  onClick={() => setSelectedVideo(project.demoVideo)}
                >
                  <FaPlay className="play-icon" /> Watch Video Demo
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
            <div className="video-modal-header">
              <span className="modal-title">Project Video Demonstration</span>
              <button className="close-modal-btn" onClick={() => setSelectedVideo(null)}>
                <FaTimes />
              </button>
            </div>
            <div className="video-frame-container">
              <video
                src={selectedVideo}
                controls
                autoPlay
                controlsList="nodownload"
                className="no-save-video modal-video"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
