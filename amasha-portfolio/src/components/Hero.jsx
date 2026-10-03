import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaServer, FaPalette, FaMobileAlt, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="hero-badge-wrap">
            <span className="badge-status">
              Available for Opportunities & Internships
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Amasha Thenuwara</span>
          </h1>

          <div className="hero-role-badges">
            <span className="role-tag"><FaServer /> Laravel Developer</span>
            <span className="role-tag"><FaPalette /> UI/UX Designer</span>
            <span className="role-tag"><FaMobileAlt /> Kotlin Developer</span>
          </div>

          <p className="hero-description">
            Software Engineering Undergraduate specializing in <strong>Laravel & PHP</strong> backend development, modern <strong>UI/UX design</strong> & responsive frontend engineering (HTML5, CSS3, React), and native <strong>Kotlin Android apps</strong>. Passionate about clean code, scalable architecture, and delivering impactful digital experiences.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              Explore Projects <FaArrowRight />
            </a>
            <a
              href="/Amasha_Thenuwara_CV.pdf"
              download="Amasha_Thenuwara_CV.pdf"
              className="btn-download-cv"
              title="Download Amasha's CV"
            >
              <FaDownload /> Download CV
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-social-links">
            <a
              href="https://github.com/AmashaThenuwara"
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/amasha-thenuwara-487765407"
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:amakthenuwara@gmail.com"
              className="social-icon-btn"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right Visual Profile Card */}
        <div className="hero-visual">
          <div className="profile-card-wrapper">
            <div className="profile-glow-ring"></div>
            <div className="profile-image-container">
              <img
                src="/assets/Portfolia Profile Pic/profile.png"
                alt="Amasha Thenuwara"
                className="profile-img no-save"
                fetchPriority="high"
                decoding="async"
                width="320"
                height="320"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>

            {/* Floating tech badges */}
            <div className="floating-badge badge-top-left">
              <span className="floating-badge-icon"><FaServer /></span>
              <span>Laravel & PHP</span>
            </div>
            <div className="floating-badge badge-bottom-right">
              <span className="floating-badge-icon"><FaMobileAlt /></span>
              <span>Kotlin & Compose</span>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Metrics Bar */}
      <div className="hero-metrics-bar">
        <div className="metric-item">
          <span className="metric-number">5+</span>
          <span className="metric-label">Production Projects</span>
        </div>
        <div className="metric-divider"></div>
        <div className="metric-item">
          <span className="metric-number">HNDSE</span>
          <span className="metric-label">Software Engineering (NIBM)</span>
        </div>
        <div className="metric-divider"></div>
        <div className="metric-item">
          <span className="metric-number">Laravel</span>
          <span className="metric-label">PHP MVC Backend</span>
        </div>
        <div className="metric-divider"></div>
        <div className="metric-item">
          <span className="metric-number">Kotlin</span>
          <span className="metric-label">Android Native Apps</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
