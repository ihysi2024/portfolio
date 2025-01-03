import employai_video from "../assets/Employ.ai.mp4";
import './Employai.css'; // Import the CSS file

function EmployAI() {
    return (
      <div classname="employai-n">
        {/* Video */}
        <video
          className="employai-recording"
          src={employai_video}
          autoPlay
          muted
          loop
          controls
          style={{
            width: '40vw', // Adjust to your desired percentage of viewport width
            height: '38vh', // Adjust to your desired percentage of viewport height
          }}
        />

        {/* Title */}
        <h1 className="employai-title">Employ.ai</h1>
        <div className="employai-title-separator"></div>
        <div className="employai-desc">
          This NodeJS application caters available job postings to users based on their preferences and previous work experiences using an AI-driven recommendation algorithm. 
          Users can enter their past work experiences and optionally include a preferred work location and base salary range, without needing to search for specific positions.
        </div>
        <div >
        <div className="employai-backend-title">Backend</div>
        <div className="employai-tech-stack">
          <div className="employai-backend-item">Javascript</div>
          <div className="employai-backend-item">Firebase</div>
        </div>
        <div className="employai-frontend-title">Frontend</div>
        <div className="employai-tech-stack">
          <div className="employai-frontend-item">TailwindCSS</div>
          <div className="employai-frontend-item">React</div>
          <div className="employai-frontend-item">Material UI</div>
        </div>
        <div className="employai-tool-title">Tools</div>
        <div className="employai-tech-stack">
          <div className="employai-tool-item">OpenAI</div>
          <div className="employai-tool-item">Adzuna API</div>
          <div className="employai-tool-item">Vercel</div>
        </div>
        </div>
      </div>
    );
}

export default EmployAI;
