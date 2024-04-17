import React from "react";
import styles from "./footer.module.css";
import FooterItems from "./FooterItems/FooterItem";
import FooterBrand from "./FooterBrand/FooterBrand";
import {
  paragraph,
  store,
  information,
  support,
  useful,
  footerBottomText,
  supportLinks,
  usefulLinks,
  storeLinks,
  informationLinks,
} from "@/libs/FooterData";

const Footer = () => {
  return (
    <>
      <footer className={`${styles.footerContainer} text-white`}>
        <div className={`container`}>
          <div className={`${styles.footerMain}`}>
            <div className={`row`}>
              <div className={`col-12 col-sm-12 col-lg-4`}>
                <FooterBrand paragraph={paragraph} />
              </div>
              <div className={`col-6 col-sm-4 col-lg-2`}>
                <FooterItems title={store} links={storeLinks} />
              </div>
              <div className={`col-6 col-sm-4 col-lg-2`}>
                <FooterItems title={information} links={informationLinks} />
              </div>
              <div className={`col-12 col-sm-4 col-lg-4`}>
                <h1>Form</h1>
              </div>
            </div>
          </div>
          <hr className={`${styles.footerHr}`} />
          <div
            className={`${styles.footerBottom} d-flex justify-content-center`}
          >
            <p>{footerBottomText}</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
