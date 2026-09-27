import React from 'react';
import { FaServer, FaPalette, FaMobileAlt, FaDatabase, FaCheckCircle } from 'react-icons/fa';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <FaServer />,
      title: "Laravel & PHP Development",
      description: "Engineering robust MVC web applications, RESTful APIs, Eloquent ORM relationships, and secure authentication workflows with Laravel and PHP."
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design & Frontend",
      description: "Crafting intuitive user journeys, wireframes, and fluid responsive interfaces with HTML5, CSS3, Tailwind CSS, Bootstrap 5, and React."
    },
    {
      icon: <FaMobileAlt />,
      title: "Kotlin Android Development",
      description: "Building modern native Android apps with Kotlin, Jetpack Compose, CameraX, Room database, and clean architectural patterns."
    },
    {
      icon: <FaDatabase />,
      title: "Database & Cloud Architecture",
      description: "Designing structured relational schemas in MySQL, cloud real-time Firebase synchronization, and IoT telemetry data pipelines."
    }
  ];

  const keyPoints = [
    "Software Engineering Undergraduate at NIBM Kandy",
    "Hands-on expertise in Laravel, Kotlin, and modern UI/UX design",
    "Active participant in tech exhibitions and robotics workshops",
    "Self-driven, detail-oriented, and passionate about clean architecture"
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
            I am a <strong>Software Engineering undergraduate</strong> focused on <strong>Laravel backend engineering</strong>, human-centered <strong>UI/UX design</strong>, and native <strong>Kotlin mobile development</strong>. Skilled across HTML5, CSS3, PHP, and modern frameworks, my passion lies in translating real-world problems into clean, high-performance, and visually captivating digital products.
          </p>
          <p className="about-text">
            Having completed my <strong>Diploma in Software Engineering</strong> and currently pursuing my <strong>Higher National Diploma (HND)</strong> at the National Institute of Business Management (NIBM), I have architected database-driven platforms, built robust RESTful API endpoints, and engineered hardware-software telemetry integrations.
          </p>
          <p className="about-text">
            Whether leading full-stack implementations like <em>StyleAura</em> (Laravel & PHP), engineering native mobile solutions like <em>AgriScout</em> & <em>TexyShield</em> (Kotlin & Compose), or presenting at <em>CyBots'25</em>, I pride myself on craftsmanship, user-focused design, and code quality.
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
