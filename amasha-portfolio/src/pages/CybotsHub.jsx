import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const CybotsHub = () => {
  return (
    <div className="section-container" style={{ paddingTop: '6rem', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/nibm" className="btn-secondary">
          <FaArrowLeft /> Back to NIBM Journey
        </Link>
      </div>
      
      <h1 className="section-title text-gradient">CyBots Exhibitions</h1>
      <p className="text-muted text-center" style={{ marginBottom: '4rem', fontSize: '1.2rem' }}>
        Explore the different years of the CyBots robotics and AI exhibitions.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', justifyContent: 'center' }}>
        
        {/* CyBots '24 */}
        <Link to="/event/cybots24" className="journey-circle">
          <div className="journey-circle-content">
            <h3>CyBots '24</h3>
          </div>
        </Link>
        
        {/* CyBots '25 */}
        <Link to="/event/cybots25" className="journey-circle">
          <div className="journey-circle-content">
            <h3>CyBots '25</h3>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default CybotsHub;
