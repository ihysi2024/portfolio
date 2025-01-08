import taskmaster_video from "../assets/taskmaster_video.mp4";
import './Taskmaster.css'; 

function TaskMaster() {
    return (
      <div className="taskmaster-container">
        <div className="taskmaster-content">
          <video 
            className="taskmaster-recording"
            src={taskmaster_video}
            autoPlay
            muted
            loop
            controls
          />
          <div className="taskmaster-text">
            <h1 className="taskmaster-title">Taskmaster</h1>
            <div className="taskmaster-title-separator"></div>
            <div className="taskmaster-desc">
              This Android application allows users to manage and maximize productivity through weekly task tracking. Users can log tasks along with their
              respective descriptions, due dates, and priority rankings, and be reminded when tasks have upcoming or overdue deadlines.
            </div>

            <h2 className="taskmaster-backend-title">Backend</h2>
            <div className="taskmaster-tech-stack">
              <div className="taskmaster-backend-item">Java</div>
              <div className="taskmaster-backend-item">Firebase</div>
              <div className="taskmaster-backend-item">GCP</div>
            </div>

            <h2 className="taskmaster-frontend-title">Frontend</h2>
            <div className="taskmaster-tech-stack">
              <div className="taskmaster-frontend-item">XML Layout</div>
              <div className="taskmaster-frontend-item">Android Studio</div>
            </div>

            <h2 className="taskmaster-tool-title">Tools</h2>
            <div className="taskmaster-tech-stack">
              <div className="taskmaster-tool-item">Gradle</div>
              <div className="taskmaster-tool-item">Calendar Provider API</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default TaskMaster;
