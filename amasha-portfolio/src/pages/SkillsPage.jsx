import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Skills from '../components/Skills';

const SkillsPage = () => {
  return (
    <div style={{ paddingTop: '5rem' }}>
      <div style={{ padding: '0 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Link to="/" className="btn-secondary">
          <FaArrowLeft /> Back to Home
        </Link>
      </div>
      <Skills />
    </div>
  );
};

export default SkillsPage;
