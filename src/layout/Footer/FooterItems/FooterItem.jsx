import React from "react";
import Link from "next/link";
import styles from "../footer.module.css";

const FooterItems = ({ title = "", links = [] }) => {
  return (
    <>
      <p className={`${styles.title} h6`}>{title}</p>
      <ul className={`${styles.listMenu} mb-4`}>
        {links.map((link, index) => (
          <li key={index}>
            <Link className={`${styles.listMenuItem}`} href={link.url}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterItems;
