import Advantages from "@/components/Home/Advantages/Advantages";
import Articles from "@/components/Home/Articles/Articles";
import Banner from "@/components/Home/Banner/Banner";
import ImageSlider from "@/components/Home/Carousel/ImageSlider";
import OurCompany from "@/components/Home/OurCompany/OurCompany";
import React from "react";

export const metadata = {
  title: "Trang chủ",
  description: "Smart Parking",
};

const Home = () => {
  return (
    <>
      {/* <ImageSlider /> */}
      {/* Products Component */}
      <Advantages />
      <OurCompany />
      {/* Certificates Component */}
      <Articles />
      <Banner />
    </>
  );
};

export default Home;
