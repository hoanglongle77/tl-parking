import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className={`container`}>
      <div className={`row`}>
        <div className={`col-lg-4`}>
          <ProjectCard />
        </div>
        <div className={`col-lg-4`}>
          <ProjectCard />
        </div>
        <div className={`col-lg-4`}>
          <ProjectCard />
        </div>
        <div className={`col-lg-4`}>
          <ProjectCard />
        </div>
        <div className={`col-lg-4`}>
          <ProjectCard />
        </div>
        <div className={`col-lg-4`}>
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
