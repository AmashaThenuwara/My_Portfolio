import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-container glass-panel">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p className="text-muted" style={{ marginBottom: '2rem' }}>
            Feel free to reach out for collaborations, opportunities, or just a quick hello!
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <span>+94 76 481 8773</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>KAHNDSE252F-012@student.nibm.lk</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>241, Greenwaliwatta, Horombawa</span>
            </div>
          </div>

          <div className="contact-socials" style={{ marginTop: '2rem' }}>
            <a href="https://github.com/AmashaThenuwara" target="_blank" rel="noreferrer" className="social-btn">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/amasha-thenuwara-487765407" target="_blank" rel="noreferrer" className="social-btn">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
