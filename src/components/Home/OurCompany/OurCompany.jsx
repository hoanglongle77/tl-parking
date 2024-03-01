import React from "react";
import Link from "next/link";
import styles from "./ourCompany.module.css";

const OurCompany = () => {
  return (
    <div
      className={`container my-4 p-4 p-lg-5 border-top border-bottom border-dark`}
    >
      <div className={`row`}>
        <div className={`col-lg-6`}>
          <SectionLeft />
        </div>
        <div className={`col-lg-6`}>
          <SectionRight />
        </div>
      </div>
    </div>
  );
};

const SectionRight = () => {
  return (
    <div className={`container my-4`}>
      <h1 className={`text-center`}>Hình ảnh</h1>
    </div>
  );
};

const SectionLeft = () => {
  return (
    <div className={`container`}>
      <h1 className={`text-danger text-uppercase fw-bold`}>Về chúng tôi</h1>
      <h2 className={"fw-bold"}>
        Hãy đến và xem những gì TLParking có thể mang lại cho bạn
      </h2>
      <p className={`text-start`}>
        TLParking, Ltd. là một trong những nhà cung cấp giải pháp đỗ xe cơ học
        chuyên nghiệp tại Việt Nam. Chúng tôi cam kết cung cấp các giải pháp đỗ
        xe phù hợp và tiết kiệm chi phí nhất cho khách hàng trên toàn thế giới.
        Chúng tôi phát triển, thiết kế và sản xuất thiết bị đỗ xe cơ khí với
        công nghệ tiên tiến của riêng mình và duy trì chất lượng cao nhất quán.
      </p>
      <div className={`container`}>
        <div className={`row`}>
          <div className={`px-0 px-lg-2 col-lg-6`}>
            <h3 className={`text-danger`}>
              <i className="bi bi-check-circle me-2"></i>
              Công nghệ tiên tiến
            </h3>
          </div>
          <div className={`px-0 px-lg-2 col-lg-6`}>
            <h3 className={`text-danger`}>
              <i className="bi bi-check-circle me-2"></i>
              Gia công sản xuất chính xác
            </h3>
          </div>
          <div className={`px-0 px-lg-2 col-lg-6`}>
            <h3 className={`text-danger`}>
              <i className="bi bi-check-circle me-2"></i>
              Hỗ trợ dịch vụ mạnh mẽ
            </h3>
          </div>
          <div className={`px-0 px-lg-2 col-lg-6`}>
            <h3 className={`text-danger`}>
              <i className="bi bi-check-circle me-2"></i>
              Định hướng khách hàng
            </h3>
          </div>
        </div>
      </div>
      <Link href="/gioi-thieu" className={`btn btn-danger fs-5`}>
        <i className="bi bi-arrow-right-square me-2"></i>Chi tiết
      </Link>
    </div>
  );
};
export default OurCompany;
