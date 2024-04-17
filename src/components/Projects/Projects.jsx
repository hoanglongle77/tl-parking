import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className={`container my-4 my-lg-5`}>
      <div className={`row`}>
        <div className={`col-sm-4 col-lg-4`}>
          <ProjectCard />
        </div>
        <div className={`col-sm-4 col-lg-4`}>
          <ProjectCard />
        </div>
        <div className={`col-sm-4 col-lg-4`}>
          <ProjectCard />
        </div>
        <div className={`col-sm-4 col-lg-4`}>
          <ProjectCard />
        </div>
        <div className={`col-sm-4 col-lg-4`}>
          <ProjectCard />
        </div>
        <div className={`col-sm-4 col-lg-4`}>
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
