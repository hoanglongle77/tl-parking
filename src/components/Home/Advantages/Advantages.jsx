import React from "react";
import Link from "next/link";
import styles from "./advantages.module.css";
import Image from "next/image";
import { AdvantagesData } from "@/libs/HomeData";

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
          {AdvantagesData.map((advantage) => (
            <div key={advantage.id} className={`col-lg-4`}>
              <AdvantageCard
                title={advantage.title}
                content={advantage.content}
                image={advantage.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AdvantageCard = ({ title, content, image }) => {
  return (
    <div className={`${styles.adCard} card text-bg-warning my-3`}>
      <Image
        src={image}
        width={200}
        height={200}
        alt={title}
        className={`card-img-top img-fluid p-3`}
      />
      <div className={`card-body`}>
        <h5 className={`card-title`}>{title}</h5>
        <p className={`card-text`}>{content}</p>
        <Link className={"btn btn-danger"} href="*">
          <i className="bi bi-bag-plus fs-4 me-2"></i>
          Tìm hiểu thêm
        </Link>
      </div>
    </div>
  );
};
export default Advantages;
