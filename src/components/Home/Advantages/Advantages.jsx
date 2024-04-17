import React from "react";
import Link from "next/link";
import styles from "./advantages.module.css";

const Advantages = () => {
  return (
    <div className={`${styles.advantagesContainer} my-5`}>
      <div className={`container`}>
        <p className="text-center fs-3 text-danger fw-bold pt-5">Lợi ích</p>
        <h2 className={`text-center text-white pb-4`}>
          Chúng tôi ở đây để cung cấp cho bạn Với giải pháp hoàn thiện nhất
        </h2>
      </div>
      <div className={`container`}>
        <div className={`row`}>
          <div className={`col-lg-4`}>
            <AdvantageCard />
          </div>
          <div className={`col-lg-4`}>
            <AdvantageCard />
          </div>
          <div className={`col-lg-4`}>
            <AdvantageCard />
          </div>
        </div>
      </div>
    </div>
  );
};

const AdvantageCard = () => {
  return (
    <div className={`${styles.adCard} card text-bg-warning my-3`}>
      <h1 className={`card-img-top text-center`}>Image</h1>
      <div className={`card-body`}>
        <h5 className={`card-title`}>Card title</h5>
        <p className={`card-text`}>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <Link className={"btn btn-danger"} href="*">
          <i className="bi bi-bag-plus fs-4 me-2"></i>
          Tìm hiểu thêm
        </Link>
      </div>
    </div>
  );
};
export default Advantages;
