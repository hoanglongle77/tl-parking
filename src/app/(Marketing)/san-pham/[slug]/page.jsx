"use client";
import { DataContext } from "@/context/DataContext";
import React, { useContext, useEffect } from "react";

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
  }, []);

  return <div>{product.name}</div>;
};

export default ProductDetailsPage;
