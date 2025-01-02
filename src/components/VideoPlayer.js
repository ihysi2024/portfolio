import React from 'react';
import './VideoPlayer.css'; // Import the updated styles

function VideoPlayer({ videoPath, width = "100%", height = "auto" }) {
  return (
    <div className="video-container">
      <video
        className="video-player"
        src={videoPath}
        controls
        style={{ width, height }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
