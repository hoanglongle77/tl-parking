"use client";
import { DataContext } from "@/context/DataContext";
import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import Image from "next/image";

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
  }, []);

  return (
    <div className={`container`}>
      <div className={`row`}>
        {products.map((product) => (
          <div key={product.id} className={`col-lg-4`}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
