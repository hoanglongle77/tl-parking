import React from "react";
import Image from "next/image";
import styles from "../footer.module.css";

const FooterBrand = ({ src, paragraph }) => {
  return (
    <>
      <div className={`me-lg-4`}>
        <Image
          src={src}
          className={`${styles.logo}`}
          width={200}
          height={200}
          alt="logo"
        />
        <p className={`${styles.title} mt-3`}>{paragraph}</p>
        <div className={`mb-3`}>
          <i className={`${styles.icon} bi bi-facebook`}></i>
          <i className={`${styles.icon} bi bi-instagram`}></i>
          <i className={`${styles.icon} bi bi-youtube`}></i>
          <i className={`${styles.icon} bi bi-twitter-x`}></i>
        </div>
      </div>
    </>
  );
};

export default FooterBrand;
