"use client";
import { DataContext } from "@/context/DataContext";
import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard/ProductCard";

const Products = () => {
  const { products, loadProducts } = useContext(DataContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        loadProducts();
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, [loadProducts]);

  return (
    <div className={`container my-4 my-lg-5`}>
      <div className={`row`}>
        {products.map((product) => (
          <div key={product.id} className={`col-sm-4 col-lg-4`}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
