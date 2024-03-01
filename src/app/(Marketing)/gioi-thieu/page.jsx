import AboutUs from "@/components/AboutUs/AboutUs";
import React from "react";

export const metadata = {
  title: "Giới thiệu",
  description: "Smart Parking",
};

const page = () => {
  return (
    <div className={`container my-5`}>
      <AboutUs />
    </div>
  );
};

export default page;
