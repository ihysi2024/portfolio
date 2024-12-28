import nightlife_video from "../assets/nightlife_recording.mov";
import './Nightlife.css'; // Import the CSS file

function Nightlife() {
    return (
      <div classname="n">
        {/* Video */}
        <video 
          className="nightliferecording"
          src={nightlife_video}
          width="400px" 
          height="800px" 
          autoPlay
          muted
          loop
          controls
        />

        {/* Title */}
        <h1 className="nightlife-title">Nightlife</h1>
        <div className="title-separator"></div>
      </div>
    );
}

export default Nightlife;
