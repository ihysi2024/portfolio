import pantry_video from "../assets/pantry.mov";
import './Pantry.css'; // Import the CSS file

function Pantry() {
    return (
      <div classname="pantry-n">
        {/* Video */}
        <video 
          className="pantry-recording"
          src={pantry_video}
          width="740px" 
          height="410px" 
          autoPlay
          muted
          loop
          controls
        />

        {/* Title */}
        <h1 className="pantry-title">Pantry Tracker</h1>
        <div className="pantry-title-separator"></div>
        <div className="pantry-desc">
          This web application allows users to manage their pantry by tracking items through a responsive pie chart. With the help of AI, users are also able to generate
          nutritional data about a given item in the pantry and be mindful of their food intake. 
        </div>
        <div>
        <div className="pantry-backend-title">Backend</div>
        <div className="pantry-tech-stack">
          <div className="pantry-backend-item">Javascript</div>
          <div className="pantry-backend-item">Firebase</div>
        </div>
        <div className="pantry-frontend-title">Frontend</div>
        <div className="pantry-tech-stack">
          <div className="pantry-frontend-item">CSS</div>
          <div className="pantry-frontend-item">Material UI</div>
          <div className="pantry-frontend-item">React</div>
        </div>
        <div className="pantry-tool-title">Tools</div>
        <div className="pantry-tech-stack">
          <div className="pantry-tool-item">OpenAI</div>
        </div>
        </div>
      </div>
    );
}

export default Pantry;
