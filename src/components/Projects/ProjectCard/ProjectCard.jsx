import React from "react";
import styles from "./projectCard.module.css";

const ProjectCard = () => {
  return (
    <div className={`${styles.projectCard} card mb-4`}>
      {/* <img src="..." class="card-img-top" alt="..." /> */}
      <h1 className={`text-center`}>Image for Project</h1>
      <div className={`card-body`}>
        <p className={`card-text`}>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
