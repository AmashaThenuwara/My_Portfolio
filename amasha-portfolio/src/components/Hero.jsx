import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaArrowRight, FaCode, FaLaptopCode, FaMicrochip } from 'react-icons/fa';
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
              <span className="status-dot"></span>
              Available for Opportunities & Internships
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Amasha Thenuwara</span>
          </h1>

          <div className="hero-role-badges">
            <span className="role-tag"><FaLaptopCode /> Full-Stack Developer</span>
            <span className="role-tag"><FaMicrochip /> IoT & AI Enthusiast</span>
            <span className="role-tag"><FaCode /> UI/UX Builder</span>
          </div>

          <p className="hero-description">
            Software Engineering Undergraduate with practical experience building modern full-stack web applications, responsive frontend interfaces, and IoT-driven smart solutions. Passionate about clean code, scalable architecture, and delivering impactful digital experiences.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              Explore Projects <FaArrowRight />
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
              href="mailto:KAHNDSE252F-012@student.nibm.lk"
              className="social-icon-btn"
              title="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="tel:+94764818773"
              className="social-icon-btn"
              title="Phone"
            >
              <FaPhoneAlt />
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
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>

            {/* Floating floating tech badges */}
            <div className="floating-badge badge-top-left">
              <span className="floating-badge-icon">⚡</span>
              <span>React & Vite</span>
            </div>
            <div className="floating-badge badge-bottom-right">
              <span className="floating-badge-icon">🚀</span>
              <span>Laravel & IoT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Metrics Bar */}
      <div className="hero-metrics-bar">
        <div className="metric-item">
          <span className="metric-number">5+</span>
          <span className="metric-label">Key Projects Built</span>
        </div>
        <div className="metric-divider"></div>
        <div className="metric-item">
          <span className="metric-number">NIBM</span>
          <span className="metric-label">HND Software Engineering</span>
        </div>
        <div className="metric-divider"></div>
        <div className="metric-item">
          <span className="metric-number">CyBots'25</span>
          <span className="metric-label">Exhibition Co-Lead</span>
        </div>
        <div className="metric-divider"></div>
        <div className="metric-item">
          <span className="metric-number">Full-Stack</span>
          <span className="metric-label">Web & Mobile Ready</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
