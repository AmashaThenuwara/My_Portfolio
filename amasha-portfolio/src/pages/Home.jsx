import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
      <Hero />
      
      {/* Sleek Navigation Hub resembling 'My Niche & Specialities' */}
      <section id="explore" className="section-container" style={{ padding: '2rem 2rem 8rem 2rem', maxWidth: '800px' }}>
        <h2 className="section-title text-gradient" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Explore My Portfolio</h2>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center'
        }}>
          <Link to="/about" className="pill-link">Who Am I</Link>
          <Link to="/skills" className="pill-link">Niche & Specialities</Link>
          <Link to="/projects" className="pill-link">Projects Snapshot</Link>
          <Link to="/events" className="pill-link">Chronicles & Milestones</Link>
          <Link to="/contact" className="pill-link">Get In Touch</Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
        <p className="text-muted">© 2026 Amasha Thenuwara. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Home;
