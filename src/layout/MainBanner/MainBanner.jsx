import Image from "next/image";
import React from "react";
import styles from "./mainBanner.module.css";

const MainBanner = ({ title }) => {
  return (
    <div className={`${styles.mainBanner}`}>
      <Image
        src={"/image/main_banner.jpg"}
        width={1920}
        height={517}
        alt="Main Banner"
        className={`${styles.bannerImage} img-fluid`}
      />
      <div className={`${styles.title} text-center`}>
        <h1
          className={`position-relative d-inline-block align-middle text-white`}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default MainBanner;
