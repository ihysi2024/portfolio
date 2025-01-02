import React from 'react';
import './Resume.css'; // (optional) If you want to keep your styles modular

const Resume = () => {
  return (
    
    <div className="resume-container" style={{ height: '100vh', width: '100%', zIndex: 2 }}>
        {console.log("hello")}
      <iframe
        src="/Resume.pdf" // Ensure the PDF path is correct in the public folder
        width="100%"
        height="100%"  // Full height of the screen
        title="Resume"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default Resume;
