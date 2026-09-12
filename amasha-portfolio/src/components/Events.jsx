import React from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

const Events = () => {
  return (
    <section id="events" className="section-container" style={{ paddingBottom: '8rem' }}>
      <h2 className="section-title">Chronicles & Milestones</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'center', marginTop: '4rem' }}>
        
        {/* British Way Academy */}
        <Link to="/bw" className="journey-circle">
          <div className="journey-circle-content">
            <h3 style={{ fontSize: '1.2rem' }}>British Way Academy Journey</h3>
          </div>
        </Link>
        
        {/* NIBM Journey */}
        <Link to="/nibm" className="journey-circle">
          <div className="journey-circle-content">
            <h3>NIBM Journey</h3>
          </div>
        </Link>

        {/* Intern Journey */}
        <Link to="/intern" className="journey-circle">
          <div className="journey-circle-content">
            <h3>Intern Journey</h3>
          </div>
        </Link>

        {/* Job Journey */}
        <Link to="/job" className="journey-circle">
          <div className="journey-circle-content">
            <h3>Job Journey</h3>
          </div>
        </Link>

      </div>
    </section>
  );
};

export default Events;
