import React from 'react';
import Timeline from './Timeline'; 

function About() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',  
      alignItems: 'center', 
      fontFamily: 'Be Vietnam Pro',
      fontWeight: '200',
      fontSize: '1.2vw',
      width: '100%',
      maxWidth: '80vw',  
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '5vw', 
      height: '60vh',  
    }}>
      <p style={{ paddingTop: '1vw'}}>
        I started Northeastern University as a Chemical Engineering major but quickly discovered my love for Computer Science
        after taking Introduction to Machine Learning and seeing the innovative ways AI/ML can be used to push medical advancement forward.
        Since taking the course, I've decided to pursue a combined major and have gained experience using both machine learning and software development 
        through a combination of various internships, fellowships, and technical club projects.
      </p>
      
      <Timeline /> 
    </div>
  );
}


export default About;
