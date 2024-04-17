import React from "react";
import Image from "next/image";
import {
  aboutTitle,
  companyDescription,
  aboutUsImages,
} from "@/libs/AboutUsData";
import styles from "./aboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={`container my-5`}>
      <AboutInfo title={aboutTitle} paragraph={companyDescription} />
      <div className={`container`}>
        <div className={`row`}>
          {aboutUsImages.map((image) => (
            <div
              key={image.id}
              className={`col-lg-4 d-flex justify-content-center`}
            >
              <AboutImage src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutInfo = ({ title, paragraph }) => {
  return (
    <div>
      <h1 className={`text-center text-uppercase`}>{title}</h1>
      <p className={`${styles.paragraph}`}>{paragraph}</p>
    </div>
  );
};

const AboutImage = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={350}
      height={350}
      className={`img-fluid my-3`}
    />
  );
};

export default AboutUs;
