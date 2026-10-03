import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <span className="brand-badge">
                <img src="/assets/ak_brush_logo.png" alt="AK" className="brand-badge-img" />
              </span>
              <span className="brand-name">Amasha<span className="brand-dot">.dev</span></span>
            </div>
            <p className="footer-tagline">
              Software Engineering undergraduate passionate about full-stack web platforms, IoT systems, and user experience.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <div className="footer-links-grid">
              <a href="#about" className="footer-link">About</a>
              <a href="#experience" className="footer-link">Experience</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#skills" className="footer-link">Skills</a>
              <a href="#events" className="footer-link">Events</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>

          <div className="footer-social-col">
            <h4 className="footer-col-title">Connect</h4>
            <div className="footer-social-row">
              <a
                href="https://github.com/AmashaThenuwara"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/amasha-thenuwara-487765407"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:amakthenuwara@gmail.com"
                className="footer-social-icon"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
            <button onClick={scrollToTop} className="back-to-top-btn">
              <FaArrowUp /> Back to top
            </button>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Amasha Thenuwara. All rights reserved.</p>
          <p className="footer-built-with">
            Engineered with React & Vite <FaHeart className="heart-icon" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
