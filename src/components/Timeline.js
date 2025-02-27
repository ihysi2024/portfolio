import React from 'react';
import './Timeline.css';

const events = [
  { date: 'January 2023', title: 'Computer Vision Co-op at Genentech', description: 'Analyzed tumor images for pathological insights using machine learning' },
  { date: 'July 2024', title: 'SWE Fellow at Headstarter AI', description: 'Completed 5 full-stack software engineering projects with students around the world' },
  { date: 'July 2024', title: 'Machine Learning Co-op at XGenomes', description: 'Optimized statistical modeling for gene sequencing efforts' },
  { date: 'September 2024', title: 'Software Engineer at Generate', description: 'Full-stack development of a nightlife recommendation mobile app' },
];

function Timeline() {
  return (
    <div className="timeline-container">
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className="timeline-event">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <p className='timeline-date'>{event.date}</p>
              <p className='timeline-title'>{event.title}</p>
              <p className='timeline-description'>{event.description}</p>
            </div>
          </div>
          
        ))}
      </div>
      <div class="timeline-line"></div>
    </div>
  );
}

export default Timeline;
