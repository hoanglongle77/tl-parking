import React from "react";
import Image from "next/image";
import {
  aboutTitle,
  companyDescription,
  aboutUsImages,
} from "@/libs/AboutUsData";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <>
      <AboutInfo title={aboutTitle} paragraph={companyDescription} />
      <div className={`container`}>
        <div className={`row`}>
          {aboutUsImages.map((image) => (
            <div key={image.id} className={`col-lg-4`}>
              <AboutImage src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </>
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
    <div>
      <Image src={src} alt={alt} width={500} height={300} />
    </div>
  );
};

export default AboutUs;
