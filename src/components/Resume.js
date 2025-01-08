import React from 'react';
import './Resume.css'; 

const Resume = () => {
  return (
    
    <div className="resume-container" style={{ height: '100vh', width: '100%', zIndex: 2 }}>
        {console.log("hello")}
      <iframe
        src="/Resume.pdf" 
        width="100%"
        height="100%"  
        title="Resume"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default Resume;
