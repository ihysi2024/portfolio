import nightlife_video from "../assets/nightlife_recording.mov";
import './Nightlife.css'; 

function Nightlife() {
    return (
      <div className="nightlife-container">
        <div className="nightlife-content">
          <video 
            className="nightlife-recording"
            src={nightlife_video}
            autoPlay
            muted
            loop
            controls
          />

          <div className="nightlife-text">
            <h1 className="nightlife-title">Nightlife</h1>
            <div className="nightlife-title-separator"></div>
            <div className="nightlife-desc">
              This mobile application allows users to explore nightlife events and venues nearby using a recommendation algorithm specifically catered to their needs and interests. 
              This app takes into account a user's nightlife preferences relative to music, exclusivity, pricing, and venue atmosphere to ensure an enjoyable user going-out experience. 
            </div>

            <h2 className="nightlife-backend-title">Backend</h2>
            <div className="nightlife-tech-stack">
              <div className="nightlife-backend-item">Go</div>
              <div className="nightlife-backend-item">Postgres</div>
              <div className="nightlife-backend-item">Supabase</div>
            </div>

            <h2 className="nightlife-frontend-title">Frontend</h2>
            <div className="nightlife-tech-stack">
              <div className="nightlife-frontend-item">React Native</div>
              <div className="nightlife-frontend-item">Typescript</div>
              <div className="nightlife-frontend-item">CSS Style Sheets</div>
            </div>

            <h2 className="nightlife-tool-title">Tools</h2>
            <div className="nightlife-tech-stack">
              <div className="nightlife-tool-item">Expo</div>
              <div className="nightlife-tool-item">Docker</div>
              <div className="nightlife-tool-item">Ngrok</div>
              <div className="nightlife-tool-item">Nix</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Nightlife;
