import Products from "@/components/Products/Products";
import React, { Suspense } from "react";

export const metadata = {
  title: "Sản phẩm",
  description: "Smart Parking",
};

const ProductsPage = () => {
  return (
    <div className={`container my-4`}>
      <div className={`row`}>
        <div className={`col-lg-3`}>
          <h1>Sidebar</h1>
        </div>
        <div className={`col-lg-9`}>
          <Suspense fallback={<div>Loading...</div>}>
            <Products />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
