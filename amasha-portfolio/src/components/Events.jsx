import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaImages, FaArrowRight, FaAward } from 'react-icons/fa';
import './Events.css';

const Events = () => {
  const events = [
    {
      id: "cybots",
      title: "CyBots'25 Tech Exhibition",
      subtitle: "Event Co-Lead & Smart Watch Innovation",
      period: "2025",
      image: "/assets/NIBM/CyBots'25/DSC00320.jpg",
      description: "Co-led the organization and tech demonstrations for the grand CyBots'25 exhibition, presenting the ESP32 Health Detection Smart Watch.",
      link: "/nibm/cybots",
      badge: "Exhibition"
    },
    {
      id: "robotics-workshop",
      title: "Robotics & IoT Workshop",
      subtitle: "Hands-on Microcontrollers & Sensors",
      period: "2026",
      image: "/assets/NIBM/Robotics & IoT Worksop - 2026/IMG_4451.JPG",
      description: "Immersive practical workshop mastering robotics hardware, ESP32 sensor interfacing, actuator controls, and embedded logic.",
      link: "/event/robotics-workshop",
      badge: "Workshop"
    },
    {
      id: "itmp",
      title: "ITMP Module — PearlLine",
      subtitle: "Enterprise IT Architecture & Strategy",
      period: "2026",
      image: "/assets/NIBM/ITMP Module/IMG-20260305-WA0054.jpg",
      description: "Comprehensive IT management project researching business process automation, architectural diagrams, and digital enterprise transformation.",
      link: "/event/itmp",
      badge: "Academic"
    },
    {
      id: "diploma-26-1",
      title: "Diploma Inauguration Ceremony",
      subtitle: "NIBM Academic Milestone",
      period: "2026",
      image: "/assets/NIBM/Diploma Inogaration Ceremony[26.1]/IMG-20260312-WA0067.jpg",
      description: "Celebrating academic progression and commitment to software engineering excellence at the official NIBM inauguration.",
      link: "/event/diploma-26-1",
      badge: "Ceremony"
    },
    {
      id: "cricket",
      title: "NIBM Cricket Fiesta",
      subtitle: "Sportsmanship & Team Camaraderie",
      period: "2025",
      image: "/assets/NIBM/NIBM Cricket Fiest/DSC05567.jpg",
      description: "Engaging in sportsmanship, teamwork, and student council activities outside the tech lab.",
      link: "/event/nibm-cricket",
      badge: "Student Life"
    },
    {
      id: "bw",
      title: "British Way English Academy",
      subtitle: "Advanced Communication Milestone",
      period: "2023",
      image: "/assets/hero.png",
      description: "Developing fluency, public speaking, and collaborative team communication skills.",
      link: "/bw",
      badge: "Milestone"
    }
  ];

  return (
    <section id="events" className="section-container">
      <div className="section-header">
        <span className="section-subtitle">Chronicles & Community</span>
        <h2 className="section-title">Milestones & Event Galleries</h2>
        <p className="section-description">
          A glimpse into tech exhibitions, workshops, team leadership, and academic milestones throughout my journey.
        </p>
      </div>

      <div className="events-cards-grid">
        {events.map((event) => (
          <div key={event.id} className="glass-panel event-card-modern">
            <div className="event-img-wrap">
              <img
                src={event.image}
                alt={event.title}
                className="event-img no-save"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/Portfolia Profile Pic/profile.png";
                }}
              />
              <span className="event-tag-badge">{event.badge}</span>
              <span className="event-year-badge"><FaCalendarAlt /> {event.period}</span>
            </div>

            <div className="event-card-body">
              <h3 className="event-card-title">{event.title}</h3>
              <p className="event-card-subtitle">{event.subtitle}</p>
              <p className="event-card-desc">{event.description}</p>

              <Link to={event.link} className="event-card-link">
                <span>View Event Gallery</span>
                <FaArrowRight className="link-arrow" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Hub links banner */}
      <div className="events-hub-banner glass-panel">
        <div className="hub-banner-content">
          <FaAward className="hub-banner-icon" />
          <div>
            <h4 className="hub-banner-title">Want to explore all NIBM and Academy Hubs?</h4>
            <p className="hub-banner-desc">Browse through organized journeys, module presentations, and behind-the-scenes galleries.</p>
          </div>
        </div>
        <div className="hub-banner-actions">
          <Link to="/nibm" className="btn-secondary">Explore NIBM Hub</Link>
          <Link to="/bw" className="btn-secondary">British Way Hub</Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
