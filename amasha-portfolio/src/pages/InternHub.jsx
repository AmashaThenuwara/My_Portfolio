import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const InternHub = () => {
  return (
    <div style={{ paddingTop: '5rem', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '0 2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <Link to="/events" className="btn-secondary">
          <FaArrowLeft /> Back to Events
        </Link>
      </div>
      
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: 'var(--text-muted)', fontFamily: 'var(--font-serif)', letterSpacing: '2px' }}>
          Intern Journey <br/>
          <span style={{ fontSize: '1.5rem', color: 'var(--accent-neon)' }}>Coming Soon...</span>
        </h1>
      </div>
    </div>
  );
};

export default InternHub;
