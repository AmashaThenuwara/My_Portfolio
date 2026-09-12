import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import EventGallery from './pages/EventGallery';
import NibmHub from './pages/NibmHub';
import BwHub from './pages/BwHub';
import InternHub from './pages/InternHub';
import JobHub from './pages/JobHub';
import CybotsHub from './pages/CybotsHub';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/nibm" element={<NibmHub />} />
        <Route path="/nibm/cybots" element={<CybotsHub />} />
        <Route path="/bw" element={<BwHub />} />
        <Route path="/intern" element={<InternHub />} />
        <Route path="/job" element={<JobHub />} />
        <Route path="/event/:eventId" element={<EventGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
