/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styles from "../products.module.css";

const ProductCard = ({ product }) => (
  <div className={`${styles.productCard} card mb-4`}>
    <Link href={`/san-pham/${product.id}`} passHref>
      <img
        className={`${styles.productImage} card-img-top`}
        as={Image}
        src={product.imageURL}
        alt={product.imageAlt}
      />
    </Link>
    <div className={`card-body`}>
      <h5 className={`${styles.productTitle} card-title text-center`}>
        {product.name}
      </h5>
      <div className={`text-center`}>
        <a class="btn btn-danger" href="#" role="button">
          <i class="bi bi-envelope-at fs-4 me-2"></i>Hỗ trợ tư vấn
        </a>
      </div>
    </div>
  </div>
);
export default ProductCard;
