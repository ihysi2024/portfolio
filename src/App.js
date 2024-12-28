import './App.css';
import iraImage from './assets/ira.jpeg';
import { useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Nightlife from './components/Nightlife';

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
    <div className="App">
      <header className={`App-header ${isSubtabActive ? "header-collapsed" : ""}`}>
        <div style={{ flexDirection: "column", marginTop: -55 }}>
          {!isSubtabActive && 
          <img src={iraImage} className="profile" />
          }
          {/* Tabs Container */}
          <div style={{ zIndex: 2, marginTop: isSubtabActive ? 60 : -95, padding: '10px', borderRadius: '5px' }}>
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
                  style={{width: 350, textAlign: 'center'}}
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
        <div style={{ flexDirection: 'column', marginTop: -40, marginLeft: -70 }}>
          <p className="ira">Hi, I'm Ira!</p>
          <p className="description">
            CO '25 Chemical Engineering & Computer Science Student @ Northeastern University
          </p>
        </div>  }

        {!isSubtabActive && 
        
        <div style={{ marginTop: 40 }}>
          <i className="fab fa-github" style={{ fontSize: '80px', color: 'white', padding: 50 }}></i>
          <i className="fab fa-linkedin" style={{ fontSize: '80px', color: 'white', padding: 50 }}></i>
          <i className="fas fa-file-alt" style={{ fontSize: '80px', color: 'white', padding: 50 }}></i>
        </div> 
        }
      </header>

      {/* Gray Rectangle */}
      <div 
      className="rectangle" 
      style={{
          height: isSubtabActive ? '90%' : '65%', // Adjust height based on subtab state
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
    
    </div>
  );
}

export default App;
