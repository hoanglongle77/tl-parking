import Projects from "@/components/Projects/Projects";
import Link from "next/link";
import React from "react";
import logo from "@/libs/images/about-1.webp";

const ProjectsPage = () => {
  return (
    <div className={`container my-5`}>
      <h1 className={`text-center mb-4`}>Dự án của chúng tôi</h1>
      <Projects />
    </div>
  );
};

export default ProjectsPage;
