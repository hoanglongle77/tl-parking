import Projects from "@/components/Projects/Projects";
import Link from "next/link";
import React from "react";
import logo from "@/libs/images/about-1.webp";
import MainBanner from "@/layout/MainBanner/MainBanner";

export const metadata = {
  title: "Dự án của chúng tôi",
  description: "Smart Parking",
};

const ProjectsPage = () => {
  return (
    <>
      <MainBanner title={metadata.title} />
      <Projects />
    </>
  );
};

export default ProjectsPage;
