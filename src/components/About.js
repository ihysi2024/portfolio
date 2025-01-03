import React from 'react';
import Timeline from './Timeline'; 

function About() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',  // Align items at the top
      alignItems: 'center',  // Center horizontally
      fontFamily: 'Be Vietnam Pro',
      fontWeight: '200',
      fontSize: '1.1vw',
      width: '100%',
      maxWidth: '80vw',  // Limit width for large screens
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '5vw', // Add padding to ensure content is not stuck to the edges
      height: '90vh',  // Ensure the container takes full height of the viewport
    }}>
      {/* Text content above the timeline */}
      <p style={{ paddingTop: '10vw' }}>
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
