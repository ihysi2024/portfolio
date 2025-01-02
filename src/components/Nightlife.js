import nightlife_video from "../assets/nightlife_recording.mov";
import './Nightlife.css'; // Import the CSS file

function Nightlife() {
    return (
      <div classname="nightlife-n">
        {/* Video */}
        <video 
          className="nightlife-recording"
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
        <div className="nightlife-title-separator"></div>
        <div className="nightlife-desc">
          This mobile application allows users to explore nightlife events and venues nearby using a recommendation algorithm specifically catered to their needs and interests. 
          This app takes into account a user's nightlife preferences relative to music, exclusivity, pricing, and venue atmosphere to ensure an enjoyable user going-out experience. 
        </div>
        <div className="nightlife-backend-title">Backend</div>
        <div className="nightlife-tech-stack">
          <div className="nightlife-backend-item">Go</div>
          <div className="nightlife-backend-item">Postgres</div>
          <div className="nightlife-backend-item">Supabase</div>
        </div>
        <div className="nightlife-frontend-title">Frontend</div>
        <div className="nightlife-tech-stack">
          <div className="nightlife-frontend-item">React Native</div>
          <div className="nightlife-frontend-item">Typescript</div>
          <div className="nightlife-frontend-item">CSS Style Sheets</div>
        </div>
        <div className="nightlife-tool-title">Tools</div>
        <div className="nightlife-tech-stack">
          <div className="nightlife-tool-item">Expo</div>
          <div className="nightlife-tool-item">Docker</div>
          <div className="nightlife-tool-item">Ngrok</div>
          <div className="nightlife-tool-item">Nix</div>
        </div>
      </div>
    );
}

export default Nightlife;
