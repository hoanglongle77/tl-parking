import React from "react";
import Link from "next/link";
import styles from "./advantages.module.css";

const Advantages = () => {
  return (
    <div className={`container`}>
      <div className={`card-group`}>
        <AdvantageCard />
        <AdvantageCard />
        <AdvantageCard />
      </div>
    </div>
  );
};

const AdvantageCard = () => {
  return (
    <div className={`${styles.adCard} card`}>
      <h1 className={`card-img-top text-center`}>Image</h1>
      <div className={`card-body`}>
        <h5 className={`card-title`}>Card title</h5>
        <p className={`card-text`}>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <Link className={"btn btn-danger"} href="*">
          <i class="bi bi-bag-plus fs-4 me-2"></i>
          Tìm hiểu thêm
        </Link>
      </div>
    </div>
  );
};
export default Advantages;
