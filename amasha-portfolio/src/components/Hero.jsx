import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container section-container" style={{ position: 'relative', overflow: 'hidden', paddingBottom: '6rem' }}>
      
      {/* Magazine Style Massive Title Overlay */}
      <div style={{ position: 'relative', zIndex: 2, paddingTop: '4rem' }}>
        <h1 style={{ 
          fontSize: 'clamp(4rem, 10vw, 8rem)', 
          fontFamily: 'var(--font-serif)', 
          lineHeight: '0.9', 
          letterSpacing: '-2px',
          textTransform: 'uppercase',
          color: '#ffffff',
          textShadow: '0 10px 30px rgba(0,0,0,0.8)'
        }}>
          Amasha's<br/>
          <span style={{ color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}>PORTFOLIO</span>
        </h1>
        <p className="text-muted" style={{ 
          marginTop: '2rem', 
          fontSize: '1.2rem', 
          maxWidth: '500px', 
          backdropFilter: 'blur(10px)', 
          padding: '1rem', 
          borderLeft: '4px solid var(--accent-neon)',
          background: 'rgba(0,10,30,0.4)'
        }}>
          Software Engineering Undergraduate & Intern. Passionate about full-stack web applications, AI monitoring systems, and sleek UI development.
        </p>

        <div className="hero-actions" style={{ marginTop: '3rem', display: 'flex', gap: '1rem', position: 'relative', zIndex: 50 }}>
          <a 
            href="#explore"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' });
            }} 
            className="btn-primary"
            style={{ cursor: 'pointer' }}
          >
            Explore My Portfolio
          </a>
        </div>

        <div className="hero-socials" style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', fontSize: '1.5rem' }}>
          <a href="https://github.com/AmashaThenuwara" target="_blank" rel="noreferrer" style={{ color: '#fff' }}><FaGithub /></a>
          <a href="https://www.linkedin.com/in/amasha-thenuwara-487765407" target="_blank" rel="noreferrer" style={{ color: '#fff' }}><FaLinkedin /></a>
          <a href="mailto:KAHNDSE252F-012@student.nibm.lk" style={{ color: '#fff' }}><FaEnvelope /></a>
        </div>
      </div>

      {/* Hero Image overlapping the text on the right */}
      <div style={{ 
        position: 'absolute', 
        top: '10%', 
        right: '5%', 
        width: '45%', 
        maxWidth: '500px',
        zIndex: 1,
        pointerEvents: 'none'
      }}>
        <img 
          src="/assets/Portfolia Profile Pic/profile.png" 
          alt="Amasha Thenuwara" 
          className="no-save"
          onContextMenu={(e) => e.preventDefault()}
          style={{
            width: '100%',
            aspectRatio: '1 / 1',
            objectFit: 'cover',
            borderRadius: '50%',
            border: '2px solid rgba(255,255,255,0.2)',
            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.9))',
            transform: 'scale(1.1)'
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
