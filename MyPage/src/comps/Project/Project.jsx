import React from "react";
import { useProContext } from "../../context/ProjectContextProvider";
import ProjectContent from "./ProjectContent";
import "../../css/project.css";

const Project = () => {
  const { prev, next } = useProContext();

  return (
    <div className="pro_div" id="project">
      <div className="icon_left" onClick={prev}>
        <i class="fas fa-chevron-left fa-3x"></i>
      </div>
      <section className="pro_section">
        <ProjectContent />
      </section>
      <div className="icon_right" onClick={next}>
        <i class="fas fa-chevron-right fa-3x"></i>
      </div>
    </div>
  );
};

export default Project;
