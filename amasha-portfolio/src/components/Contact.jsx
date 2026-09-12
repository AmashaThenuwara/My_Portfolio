import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pre-fill mailto link with user message
    const mailtoUrl = `mailto:KAHNDSE252F-012@student.nibm.lk?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-header">
        <span className="section-subtitle">Get In Touch</span>
        <h2 className="section-title">Let's Connect & Collaborate</h2>
        <p className="section-description">
          Whether you have an internship opportunity, project collaboration, or just want to chat tech — my inbox is always open!
        </p>
      </div>

      <div className="contact-layout-grid">
        {/* Left Column: Direct Info Cards */}
        <div className="contact-info-column">
          <div className="glass-panel contact-info-card">
            <h3 className="contact-card-heading">Contact Information</h3>
            <p className="contact-card-sub">
              Reach out directly via email, phone, or find me on professional networks.
            </p>

            <div className="contact-channels">
              <a href="mailto:KAHNDSE252F-012@student.nibm.lk" className="channel-item">
                <div className="channel-icon-box">
                  <FaEnvelope />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Email</span>
                  <span className="channel-val">KAHNDSE252F-012@student.nibm.lk</span>
                </div>
              </a>

              <a href="tel:+94764818773" className="channel-item">
                <div className="channel-icon-box">
                  <FaPhoneAlt />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Phone</span>
                  <span className="channel-val">+94 76 481 8773</span>
                </div>
              </a>

              <div className="channel-item">
                <div className="channel-icon-box">
                  <FaMapMarkerAlt />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Location</span>
                  <span className="channel-val">241, Greenwaliwatta, Horombawa, Sri Lanka</span>
                </div>
              </div>
            </div>

            <div className="contact-social-strip">
              <span className="social-strip-label">Follow / Connect:</span>
              <div className="social-buttons-row">
                <a
                  href="https://github.com/AmashaThenuwara"
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill-btn"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/amasha-thenuwara-487765407"
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill-btn"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="contact-form-column">
          <form className="glass-panel contact-form-card" onSubmit={handleSubmit}>
            <h3 className="contact-card-heading">Send a Message</h3>
            
            {submitted ? (
              <div className="form-success-banner">
                <FaCheckCircle className="success-icon" />
                <div>
                  <h4>Thank you!</h4>
                  <p>Opening your email client to send the message. I'll get back to you shortly.</p>
                </div>
              </div>
            ) : (
              <>
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. John Doe"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Internship opportunity / Project inquiry"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Hi Amasha, I came across your portfolio and..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary form-submit-btn">
                  <FaPaperPlane /> Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
