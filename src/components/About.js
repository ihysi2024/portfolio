import React from 'react';
import Timeline from './Timeline'; 

function About() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      marginTop: '-500px',
      fontFamily: 'Be Vietnam Pro',
      fontWeight: '200',
      fontSize: '1.2rem',  // Use relative units for font size
      width: '100%',
      maxWidth: '1200px',  // Limit width for large screens
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '0 20px', // Add padding to prevent content from sticking to edges on small screens
    }}>
      {/* Text content above the timeline */}
      <p>
        I started Northeastern University as a Chemical Engineering major but quickly discovered my love for Computer Science
        after taking Introduction to Machine Learning and seeing the innovative ways AI/ML can be used to push medical advancement forward.
        Since taking the course, I've decided to pursue a combined major and have gained experience using both machine learning and software development 
        through a combination of various internships, fellowships, and technical club projects.
      </p>
      
      {/* Timeline component below the text */}
      <Timeline /> 
    </div>
  );
}

export default About;
