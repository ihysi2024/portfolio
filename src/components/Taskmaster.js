import taskmaster from "../assets/taskmaster_video.mp4";
import './Taskmaster.css'; // Import the CSS file


function TaskMaster() {
    return (
      <div classname="taskmaster-n">
        {/* Video */}
        <video 
          className="taskmaster-recording"
          src={taskmaster}
          width="380px" 
          height="700px" 
          autoPlay
          muted
          loop
          controls
        />

        {/* Title */}
        <div style={{display: 'flex', flexDirection: 'row'}}>
        <h1 className="taskmaster-title">Taskmaster</h1>
        
        </div>
        <div className="taskmaster-title-separator"></div>
        <div className="taskmaster-desc">
          This Android application allows users to manage and maximize productivity through weekly task tracking. User can log tasks along with their
          respective descriptions, due dates, and priority ranking, and be reminded when tasks have upcoming or overdue deadlines.
        </div>
        <div className="taskmaster-backend-title">Backend</div>
        <div className="taskmaster-tech-stack">
          <div className="taskmaster-backend-item">Java</div>
          <div className="taskmaster-backend-item">Firebase</div>
          <div className="taskmaster-backend-item">GCP</div>
        </div>
        <div className="taskmaster-frontend-title">Frontend</div>
        <div className="taskmaster-tech-stack">
          <div className="taskmaster-frontend-item">XML Layout</div>
          <div className="taskmaster-frontend-item">Android Studio</div>
        </div>
        <div className="taskmaster-tool-title">Tools</div>
        <div className="taskmaster-tech-stack">
          <div className="taskmaster-tool-item">Gradle</div>
          <div className="taskmaster-tool-item">Calendar Provider API</div>
        </div>
      </div>
    );
}

export default TaskMaster;
