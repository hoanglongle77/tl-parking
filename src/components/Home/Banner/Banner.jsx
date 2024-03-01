import React from "react";
import styles from "./banner.module.css";
import Link from "next/link";

const Banner = () => {
  return (
    <div className={` mt-4 p-4 bg-warning text-center text-light`}>
      <h1 className={`mb-3`}>
        Bắt đầu với Hệ thống đỗ xe thông minh TL Parking
      </h1>
      <h2 className={`my-4`}>
        Các chuyên gia của chúng tôi sẽ hỗ trợ bạn trải nghiệm đỗ xe tốt nhất!
      </h2>
      <Link href="/lien-he" className="btn btn-light text-warning fw-bold p-3">
        Liên hệ với chúng tôi
      </Link>
    </div>
  );
};

export default Banner;
