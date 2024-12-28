
import React from 'react';
import Timeline from './Timeline'; 

function About() {
  return (
    <div style={{flexDirection: 'column', marginTop: -500, fontFamily: 'Be Vietnam Pro', fontWeight: '200', fontSize: 20, width: 1200,}}>
        <p>
            I started Northeastern University as a Chemical Engineering major but quickly discovered my love for Computer Science
            after taking Introduction to Machine Learning and seeing the innovating ways AI/ML can be used to push medical advancement forward.
            Since taking the course, I've decided to pursue a combined major and have gained experience using both machine learning and software development 
            through a combination of various internships, fellowships, and technical club projects. </p>
      <Timeline /> {/* Render the Timeline component */}
    </div>
  );
}

export default About;
