/* eslint-disable @next/next/no-img-element */
"use client";
import { DataContext } from "@/context/DataContext";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import styles from "./details.module.css";

const ProductDetailsPage = ({ params }) => {
  const { product, getProductById } = useContext(DataContext);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        getProductById(params.slug);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProductDetails();
  }, [getProductById, params.slug]);

  return (
    <div className={`container my-4`}>
      <h1 className={`text-center mb-4`}>Sản phẩm</h1>
      <div className={`row`}>
        <div className={`col-lg-8`}>
          <ProductDetails
            name={product.name}
            image={product.imageURL}
            alt={product.imageAlt}
          />
          <ProductDescription
            image={product.imageURL}
            alt={product.imageAlt}
            description={product.description}
          />
        </div>
        <div className={`col-lg-4`}>
          <DetailsSidebar />
        </div>
      </div>
    </div>
  );
};

const ProductDetails = ({ image, name, alt }) => {
  return (
    <div
      className={`${styles.productDetails} p-4 border-end border-bottom border-2`}
    >
      <div className={`row`}>
        <div className={`col-lg-6`}>
          <figure className={`gallery-wrap`}>
            <img
              className={`mb-3 img-thumbnail`}
              as={Image}
              src={image}
              alt={alt}
            />
          </figure>
        </div>
        <div className={`col-lg-6`}>
          <h1 className={`fs-4`}>{name}</h1>
          <div className={`${styles.requestContainer} d-flex flex-column`}>
            <a className={`btn btn-secondary rounded my-2`}>
              <i className="bi bi-envelope-arrow-down fs-4 me-2"></i>Yêu cầu báo
              giá
            </a>
            <a className={`btn btn-danger rounded my-2`}>
              <i className="bi bi-bag-plus fs-4 me-2"></i>Thêm vào giỏ hàng
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductDescription = ({ image, alt, description }) => {
  return (
    <div className={`${styles.productDescription} p-4 mt-4 border`}>
      <div className={"container"}>
        <h2 className={`bg-warning p-2 rounded text-dark`}>Mô tả sản phẩm</h2>
      </div>
      <img className={`img-fluid`} as={Image} src={image} alt={alt} />
      <p>{description}</p>
    </div>
  );
};

const DetailsSidebar = () => {
  return <div className={`container`}></div>;
};

export default ProductDetailsPage;
