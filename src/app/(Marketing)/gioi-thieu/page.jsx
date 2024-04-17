import AboutUs from "@/components/AboutUs/AboutUs";
import MainBanner from "@/layout/MainBanner/MainBanner";
import React from "react";

export const metadata = {
  title: "Giới thiệu",
  description: "Smart Parking",
};

const AboutUsPage = () => {
  return (
    <>
      <MainBanner title={metadata.title} />
      <AboutUs />
    </>
  );
};

export default AboutUsPage;
