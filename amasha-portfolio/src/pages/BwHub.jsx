import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const BwHub = () => {
  return (
    <div className="section-container" style={{ paddingTop: '6rem' }}>
      <Link to="/" className="btn-secondary" style={{ marginBottom: '2rem' }}>
        <FaArrowLeft /> Back to Home
      </Link>
      <h1 className="section-title">British Way Academy</h1>
      <p className="text-muted text-center" style={{ marginBottom: '3rem', fontSize: '1.2rem' }}>
        My journey developing spoken English skills, engaging in debates, and graduating.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'center', marginTop: '4rem' }}>
        <Link to="/event/bw-debate" className="journey-circle">
          <div className="journey-circle-content">
            <h3>English Debate Competition</h3>
          </div>
        </Link>
        
        <Link to="/event/bw-graduation" className="journey-circle">
          <div className="journey-circle-content">
            <h3>Graduation Ceremony</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BwHub;
