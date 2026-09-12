import React from 'react';
import { FaLaptopCode, FaMicrochip, FaLayerGroup, FaDatabase, FaCheckCircle } from 'react-icons/fa';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <FaLaptopCode />,
      title: "Full-Stack Web Development",
      description: "Developing end-to-end web applications with PHP, Laravel, React.js, JavaScript, and RESTful API integrations."
    },
    {
      icon: <FaMicrochip />,
      title: "IoT & Smart Systems",
      description: "Interfacing ESP32 and microcontrollers with cloud databases, sensor telemetry, and mobile application dashboards."
    },
    {
      icon: <FaLayerGroup />,
      title: "Modern UI/UX Engineering",
      description: "Crafting fluid, component-driven user interfaces with Vite, Tailwind CSS, Bootstrap, and responsive design best practices."
    },
    {
      icon: <FaDatabase />,
      title: "Database & Backend Architecture",
      description: "Designing structured relational & NoSQL schemas with MySQL, Firebase Realtime DB, and Room DB for offline-first apps."
    }
  ];

  const keyPoints = [
    "Software Engineering Undergraduate at NIBM Kandy",
    "Hands-on experience in full-stack web and mobile development",
    "Active participant in tech exhibitions and robotics workshops",
    "Self-driven, detail-oriented, and passionate about continuous learning"
  ];

  return (
    <section id="about" className="section-container">
      <div className="section-header">
        <span className="section-subtitle">About Me</span>
        <h2 className="section-title">Background & Technical Mindset</h2>
        <p className="section-description">
          Bridging software engineering rigor with user-centered interface design and smart IoT capabilities.
        </p>
      </div>

      <div className="about-main-grid">
        {/* Left: Bio narrative */}
        <div className="glass-panel about-bio-card">
          <h3 className="about-card-title">Who I Am</h3>
          <p className="about-text">
            I am a <strong>Software Engineering undergraduate</strong> with a strong foundation in modern web technologies, database management, and embedded IoT systems. My journey is rooted in turning complex engineering concepts into accessible, functional, and visually engaging digital products.
          </p>
          <p className="about-text">
            Having completed my <strong>Diploma in Software Engineering</strong> and currently pursuing my <strong>Higher National Diploma (HND)</strong> at the National Institute of Business Management (NIBM), I have developed database-driven applications, implemented robust authentication, handled RESTful API pipelines, and engineered hardware-software telemetry integrations.
          </p>
          <p className="about-text">
            Whether collaborating on large-scale exhibition projects like <em>CyBots'25</em> or building standalone full-stack platforms, I pride myself on clean code architecture, problem-solving, and delivering high quality within deadlines.
          </p>

          <div className="about-key-points">
            {keyPoints.map((point, idx) => (
              <div key={idx} className="key-point-item">
                <FaCheckCircle className="key-point-icon" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Technical Highlights Grid */}
        <div className="about-highlights-grid">
          {highlights.map((item, index) => (
            <div key={index} className="glass-panel highlight-card">
              <div className="highlight-icon-wrap">
                {item.icon}
              </div>
              <h4 className="highlight-title">{item.title}</h4>
              <p className="highlight-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
