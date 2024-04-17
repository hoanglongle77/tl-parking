import Products from "@/components/Products/Products";
import MainBanner from "@/layout/MainBanner/MainBanner";
import React, { Suspense } from "react";

export const metadata = {
  title: "Sản phẩm",
  description: "Smart Parking",
};

const ProductsPage = () => {
  return (
    <>
      <MainBanner title={metadata.title} />
      <Products />
    </>
  );
};

export default ProductsPage;
