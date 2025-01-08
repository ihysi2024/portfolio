import React, { useState } from "react";
import "./Projects.css"; 

import Nightlife from "../assets/nightlife_ss.png";
import EmployAI from "../assets/employ_ai.ss.png";
import TaskMaster from "../assets/taskmaster_ss.png";
import Pantry from "../assets/pantry_ss.png";
import GNN from "../assets/gnn.png";

const Projects = ({ hoverEffect }) => {
  return (
    <div className="screenshot-box">
      <img
        src={Nightlife}
        className={`screenshot nightlife ${hoverEffect === "nightlife" ? "lift" : ""}`}
        alt="Nightlife Screenshot"
      />
      <img
        src={EmployAI}
        className={`screenshot employai ${hoverEffect === "employai" ? "lift" : ""}`}
        alt="Employ AI Screenshot"
      />
      <img
        src={Pantry}
        className={`screenshot pantry ${hoverEffect === "pantry" ? "lift" : ""}`}
        alt="Pantry Screenshot"
      />
      <img
        src={GNN}
        className={`screenshot gnn ${hoverEffect === "gnn" ? "lift" : ""}`}
        alt="GNN Screenshot"
      />
      <img
        src={TaskMaster}
        className={`screenshot taskmaster ${hoverEffect === "taskmaster" ? "lift" : ""}`}
        alt="TaskMaster Screenshot"
      />
    </div>
  );
};

export default Projects;
