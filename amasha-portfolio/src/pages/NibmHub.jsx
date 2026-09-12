import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const NibmHub = () => {
  return (
    <div className="section-container" style={{ paddingTop: '6rem' }}>
      <Link to="/" className="btn-secondary" style={{ marginBottom: '2rem' }}>
        <FaArrowLeft /> Back to Home
      </Link>
      <h1 className="section-title">My NIBM Journey</h1>
      <p className="text-muted text-center" style={{ marginBottom: '3rem', fontSize: '1.2rem' }}>
        A collection of my academic highlights, workshops, and exhibitions at the National Institute of Business Management.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', justifyContent: 'center', marginTop: '4rem' }}>
        
        <Link to="/nibm/cybots" className="journey-circle">
          <div className="journey-circle-content">
            <h3>CyBots</h3>
          </div>
        </Link>
        
        <Link to="/event/crest" className="journey-circle">
          <div className="journey-circle-content">
            <h3>CREST Module</h3>
          </div>
        </Link>

        <Link to="/event/itmp" className="journey-circle">
          <div className="journey-circle-content">
            <h3>ITMP Module</h3>
          </div>
        </Link>

        <Link to="/event/robotics-workshop" className="journey-circle">
          <div className="journey-circle-content">
            <h3>Robotics Workshop</h3>
          </div>
        </Link>

        <Link to="/event/diploma-25-1" className="journey-circle">
          <div className="journey-circle-content">
            <h3 style={{ fontSize: '1.2rem' }}>Diploma Inauguration [25.1]</h3>
          </div>
        </Link>

        <Link to="/event/diploma-26-1" className="journey-circle">
          <div className="journey-circle-content">
            <h3 style={{ fontSize: '1.2rem' }}>Diploma Inauguration [26.1]</h3>
          </div>
        </Link>

        <Link to="/event/nibm-commercial" className="journey-circle">
          <div className="journey-circle-content">
            <h3 style={{ fontSize: '1.2rem' }}>NIBM Commercial Video</h3>
          </div>
        </Link>

        <Link to="/event/nibm-cricket" className="journey-circle">
          <div className="journey-circle-content">
            <h3>Cricket Fiesta</h3>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default NibmHub;
