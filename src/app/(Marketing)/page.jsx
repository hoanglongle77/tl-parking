import Advantages from "@/components/Home/Advantages/Advantages";
import Articles from "@/components/Home/Articles/Articles";
import Banner from "@/components/Home/Banner/Banner";
import ImageSlider from "@/components/Home/Carousel/ImageSlider";
import OurCompany from "@/components/Home/OurCompany/OurCompany";
import Loading from "@/components/Loading/Loading";
import React, { Suspense } from "react";

export const metadata = {
  title: "Trang chủ",
  description: "Smart Parking",
};

const Home = () => {
  return (
    <div className={``}>
      <ImageSlider />
      {/* Products Component */}
      <Advantages />
      <OurCompany />
      {/* Certificates Component */}
      <Articles />
      <Banner />
    </div>
  );
};

export default Home;
