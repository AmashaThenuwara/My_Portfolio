import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './EventGallery.css';

const EventGallery = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  // Mapping event IDs to actual folder paths and titles
  const eventData = {
    'cybots24': {
      title: "CyBots '24",
      description: "My journey and involvement in the CyBots '24 exhibition.",
      images: [
        "/assets/NIBM/CyBots'24/IMG-20241004-WA0011(1).jpg"
      ]
    },
    'cybots25': {
      title: "CyBots '25",
      description: "Exploring robotics and AI innovations at CyBots '25.",
      images: [
        "/assets/NIBM/CyBots'25/DSC00320.jpg",
        "/assets/NIBM/CyBots'25/IMG-20250908-WA0002.jpg",
        "/assets/NIBM/CyBots'25/IMG-20250910-WA0001.jpg",
        "/assets/NIBM/CyBots'25/IMG-20250911-WA0080.jpg",
        "/assets/NIBM/CyBots'25/IMG-20250911-WA0090.jpg",
        "/assets/NIBM/CyBots'25/IMG-20250924-WA0043.jpg",
        "/assets/NIBM/CyBots'25/IMG_4542.JPG"
      ]
    },
    'crest': {
      title: "CREST Module",
      description: "Moments from the CREST module, featuring engaging activities like the Yoga and Stress Release sessions.",
      images: [
        "/assets/NIBM/CREST Module/Yoga Session/IMG-20260430-WA0112.jpg",
        "/assets/NIBM/CREST Module/Yoga Session/IMG-20260430-WA0119.jpg",
        "/assets/NIBM/CREST Module/Stress Release Session/IMG-20260505-WA0094.jpg",
        "/assets/NIBM/CREST Module/Stress Release Session/IMG-20260521-WA0153.jpg"
      ]
    },
    'itmp': {
      title: "ITMP Module",
      description: "Highlights from the ITMP module, including our brainstorm presentations and project discussions.",
      images: [
        "/assets/NIBM/ITMP Module/IMG-20260305-WA0044.jpg",
        "/assets/NIBM/ITMP Module/IMG-20260305-WA0046.jpg",
        "/assets/NIBM/ITMP Module/IMG-20260305-WA0048.jpg",
        "/assets/NIBM/ITMP Module/IMG-20260305-WA0050.jpg",
        "/assets/NIBM/ITMP Module/IMG-20260305-WA0052.jpg",
        "/assets/NIBM/ITMP Module/IMG-20260305-WA0054.jpg",
        "/assets/NIBM/ITMP Module/IMG-20260305-WA0092.jpg",
        "/assets/NIBM/ITMP Module/file_000000003bac71fdba8fad7987d19a79.png",
        "/assets/NIBM/ITMP Module/WhatsApp Video 2026-03-05 at 10.36.31 AM.mp4"
      ]
    },
    'robotics-workshop': {
      title: "Robotics & IoT Workshop - 2026",
      description: "Hands-on experience building and programming IoT devices during the 2026 workshop.",
      images: [
        "/assets/NIBM/Robotics & IoT Worksop - 2026/FB_IMG_1780970342821.jpg",
        "/assets/NIBM/Robotics & IoT Worksop - 2026/IMG-20260601-WA0041.jpg",
        "/assets/NIBM/Robotics & IoT Worksop - 2026/IMG-20260601-WA0043.jpg",
        "/assets/NIBM/Robotics & IoT Worksop - 2026/IMG-20260601-WA0044.jpg",
        "/assets/NIBM/Robotics & IoT Worksop - 2026/IMG_4303.JPG",
        "/assets/NIBM/Robotics & IoT Worksop - 2026/IMG_4304.JPG",
        "/assets/NIBM/Robotics & IoT Worksop - 2026/IMG_4305.JPG",
        "/assets/NIBM/Robotics & IoT Worksop - 2026/IMG_4344.JPG",
        "/assets/NIBM/Robotics & IoT Worksop - 2026/IMG_4345.JPG",
        "/assets/NIBM/Robotics & IoT Worksop - 2026/IMG_4451.JPG"
      ]
    },
    'diploma-25-1': {
      title: "Diploma Inauguration Ceremony [25.1]",
      description: "Celebrating the beginning of the Diploma journey with batch 25.1.",
      images: [
        "/assets/NIBM/Diploma Inogaration Ceremony[25.1]/FB_IMG_1738841719853.jpg",
        "/assets/NIBM/Diploma Inogaration Ceremony[25.1]/IMG-20250206-WA0011.jpg",
        "/assets/NIBM/Diploma Inogaration Ceremony[25.1]/IMG-20250206-WA0013.jpg",
        "/assets/NIBM/Diploma Inogaration Ceremony[25.1]/IMG-20250206-WA0040.jpg",
        "/assets/NIBM/Diploma Inogaration Ceremony[25.1]/IMG-20250209-WA0006.jpg",
        "/assets/NIBM/Diploma Inogaration Ceremony[25.1]/file_00000000d99c71fda5c35a4213778d3b.png",
        "/assets/NIBM/Diploma Inogaration Ceremony[25.1]/VID_20250314_225343_577.mp4.mov"
      ]
    },
    'diploma-26-1': {
      title: "Diploma Inauguration Ceremony [26.1]",
      description: "Welcoming the 26.1 batch at their Diploma Inauguration.",
      images: [
        "/assets/NIBM/Diploma Inogaration Ceremony[26.1]/IMG-20260312-WA0067.jpg",
        "/assets/NIBM/Diploma Inogaration Ceremony[26.1]/IMG-20260312-WA0074.jpg",
        "/assets/NIBM/Diploma Inogaration Ceremony[26.1]/IMG-20260315-WA0214.jpg",
        "/assets/NIBM/Diploma Inogaration Ceremony[26.1]/VID-20260313-WA0424.mp4"
      ]
    },
    'nibm-commercial': {
      title: "NIBM Commercial Video",
      description: "Behind the scenes and final cuts of the NIBM Commercial Video.",
      images: [
        "/assets/NIBM/NIBM Commercial Video/VID-20251026-WA0073.mp4"
      ]
    },
    'nibm-cricket': {
      title: "NIBM Cricket Fiesta",
      description: "Fun, teamwork, and sportsmanship at the NIBM Cricket Fiesta.",
      images: [
        "/assets/NIBM/NIBM Cricket Fiest/DSC05567.jpg",
        "/assets/NIBM/NIBM Cricket Fiest/DSC05601.jpg"
      ]
    },
    'bw-debate': {
      title: "English Debate Competition",
      description: "Engaging in competitive debates to enhance spoken English and critical thinking at British Way.",
      images: [
        "/assets/BW/Debate/IMG-20240401-WA0063.jpg",
        "/assets/BW/Debate/IMG-20240401-WA0076.jpg",
        "/assets/BW/Debate/IMG_20240401_204630_668.webp"
      ]
    },
    'bw-graduation': {
      title: "Graduation Ceremony",
      description: "Memorable moments from the graduation ceremony at British Way Academy.",
      images: [
        "/assets/BW/Graduation/IMG-20240531-WA0100.jpg",
        "/assets/BW/Graduation/IMG-20240531-WA0106.jpg"
      ]
    }
  };

  const data = eventData[eventId];

  if (!data) {
    return (
      <div className="section-container" style={{ textAlign: 'center', paddingTop: '10rem' }}>
        <h2>Event Not Found</h2>
        <Link to="/" className="btn-primary" style={{ marginTop: '2rem' }}>Go Back Home</Link>
      </div>
    );
  }

  const isVideo = (url) => url.toLowerCase().endsWith('.mp4') || url.toLowerCase().endsWith('.mov');

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <button onClick={() => navigate(-1)} className="btn-secondary back-btn">
          <FaArrowLeft /> Go Back
        </button>
        <h1 className="text-gradient" style={{ fontSize: '3rem', margin: '1rem 0' }}>{data.title}</h1>
        <p className="text-muted" style={{ maxWidth: '600px', margin: '1rem auto', fontSize: '1.2rem' }}>
          {data.description}
        </p>
      </div>

      <div className="masonry-grid section-container">
        {data.images.map((src, index) => (
          <div key={index} className="gallery-item polaroid-frame">
            {isVideo(src) ? (
              <video 
                src={src} 
                controls 
                controlsList="nodownload" 
                className="no-save-video" 
                onContextMenu={(e) => e.preventDefault()} 
              />
            ) : (
              <img 
                src={src} 
                alt={`${data.title} ${index + 1}`} 
                loading="lazy" 
                decoding="async"
                className="no-save" 
                onContextMenu={(e) => e.preventDefault()} 
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventGallery;
