import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Events from '../components/Events';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="portfolio-app-root">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Hero Section */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Events />
        <Contact />
      </main>

      {/* Modern Footer */}
      <Footer />
    </div>
  );
};

export default Home;
