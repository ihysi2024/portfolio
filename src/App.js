import './App.css';
import iraImage from './assets/ira.jpeg';
import { useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Nightlife from './components/Nightlife';
import TaskMaster from './components/Taskmaster';
import EmployAI from './components/Employai';
import Pantry from './components/Pantry';
import GCN from './components/GCN';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Corrected imports
import Resume from './components/Resume'; // Ensure this import is correct



function App() {
  const [tab, setTab] = useState("about");
  const [showProjectSubtabs, setShowProjectSubtabs] = useState(false); // State to toggle subtabs
  const [hoverEffect, setHoverEffect] = useState(""); // Track the hovered subtab
  const [isSubtabActive, setIsSubtabActive] = useState(false); // State to track subtab clicks

  const handleTabClick = (tabName) => {
    setTab(tabName);
    if (tabName === "projects") {
      setShowProjectSubtabs(!showProjectSubtabs); // Toggle subtabs visibility
    } else {
      setShowProjectSubtabs(false); // Hide subtabs for other tabs
    }
  };

  const handleSubtabClick = (subtabName) => {
    console.log("Subtab clicked:", subtabName);
    setIsSubtabActive(true); // Activate subtab view
    setTab(subtabName)
  };

  const handleSubtabHover = (projectName) => {
    setHoverEffect(projectName); // Set the hovered project name
  };


  return (
    <Router>
    <div className="App">
      <header className={`App-header ${isSubtabActive ? "header-collapsed" : ""}`}>
        <div style={{ flexDirection: "column", marginTop: '5vh' }}>
          {!isSubtabActive && 
          <img src={iraImage} className="profile" />
          }
          {/* Tabs Container */}
          <div style={{ zIndex: 2, marginTop: isSubtabActive ? '-7vh' : '-10.56vh', padding: '1vh', borderRadius: '5px', marginLeft: '1vw' }}>
            {!isSubtabActive && 
            <div>
            <p className="big-tab" onClick={() => handleTabClick('about')}>About</p>
            </div>
            }
            <p className="big-tab" onClick={() => handleTabClick('projects')}>Projects</p>
            
            
            {/* Subtabs for Projects */}
            {showProjectSubtabs && (
              <div className="subtabs-container">
                <p
                  className="subtab"
                  onMouseEnter={() => handleSubtabHover("nightlife")}
                  onMouseLeave={() => handleSubtabHover("")}
                  onClick={() => handleSubtabClick("nightlife")}
                >
                  Nightlife
                </p>
                <p
                  className="subtab"
                  onMouseEnter={() => handleSubtabHover("employai")}
                  onMouseLeave={() => handleSubtabHover("")}
                  onClick={() => handleSubtabClick("employai")}
                >
                  Employ.ai
                </p>
                <p
                  className="subtab"
                  onMouseEnter={() => handleSubtabHover("taskmaster")}
                  onMouseLeave={() => handleSubtabHover("")}
                  onClick={() => handleSubtabClick("taskmaster")}
                >
                  Taskmaster
                </p>
                <p
                  className="subtab"
                  onMouseEnter={() => handleSubtabHover("pantry")}
                  onMouseLeave={() => handleSubtabHover("")}
                  onClick={() => handleSubtabClick("pantry")}
                >
                  Pantry Tracker
                </p>
                <p
                  className="subtab"
                  style={{width: '20vw', textAlign: 'center'}}
                  onMouseEnter={() => handleSubtabHover("gnn")}
                  onMouseLeave={() => handleSubtabHover("")}
                  onClick={() => handleSubtabClick("gnn")}
                >
                  Disease Prediction
                </p>
              </div>
          )}
          {!isSubtabActive && <p className="big-tab" onClick={() => handleTabClick('contact')}>Contact</p>}
          {isSubtabActive && (<button className="bottom-left-button" onClick={() => { setIsSubtabActive(false);
                                                                                      setTab("about"); }}>
                                  Go Back
                                </button>
                              )}
          {isSubtabActive && tab === "projects" && (() => {
              setTab("about");
              setIsSubtabActive(false);
              return null; // Return something if needed for rendering
          })()}

          </div>
        </div>

        {/* Introduction Text */}
        {!isSubtabActive && 
        <div style={{ flexDirection: 'column'}}>
          <p className="ira">Hi, I'm Ira!</p>
          <p className="description">
            CO '25 Chemical Engineering & Computer Science Student @ Northeastern University
          </p>
        </div>  }

        {!isSubtabActive && 
        
        <div style={{ marginTop: '5vh' }}>
          <a 
            href="https://github.com/ihysi2024" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i 
              className="fab fa-github" 
              style={{ fontSize: '4vw', color: 'white', padding: '4vw' }}
            ></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/ira-hysi-93a0261b0/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i 
              className="fab fa-linkedin" 
              style={{ fontSize: '4vw', color: 'white', padding: '4vw' }}
            ></i>
          </a>
          <Link to="/Hysi_Resume_Jan2025.pdf" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-file-alt" style={{ fontSize: '4vw', color: 'white', padding: '4vw' }}></i>
          </Link>
        </div> 
        }
      </header>

      {/* Gray Rectangle */}
      <div 
      className="rectangle" 
      style={{
          height: isSubtabActive ? '90vh' : '65vh', // Adjust height based on subtab state
          transition: 'height 0.5s ease',
        }}>
      </div>

      {/* Conditionally Render About Component */}
      {tab === "about" && (
        <div className="about-container">
          <About />
        </div>
      )}

      {tab === "projects" && (
        <div className="about-container">
          <Projects hoverEffect={hoverEffect}/>
        </div>
      )}

      {tab == "nightlife" && 
          <div className="about-container">
          <Nightlife/>
        </div>}

        {tab == "taskmaster" && 
          <div className="about-container">
          <TaskMaster/>
        </div>}

        {tab == "employai" && 
          <div className="about-container">
          <EmployAI/>
        </div>}

        {tab == "pantry" && 
          <div className="about-container">
          <Pantry/>
        </div>}

        {tab == "gnn" && 
          <div className="about-container">
          <GCN />
        </div>}
    
        {tab == "contact" && 
          <div className="about-container">
          <Contact />
        </div>}
    </div>
    </Router>
  );
}

export default App;