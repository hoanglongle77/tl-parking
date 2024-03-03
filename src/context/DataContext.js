// ProductContext.js
"use client";
import React, { createContext, useState, cache } from "react";
import { getProducts, getItemById, getProjects } from "@/api/FirebaseApi";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [aboutUs, setAboutUs] = useState([]);
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [project, setProject] = useState([]);
  const [projects, setProjects] = useState([]);
  const [solution, setSolution] = useState([]);
  const [solutions, setSolutions] = useState([]);

  const loadIntroduction = cache(async () => {
    try {
      const fetchedAbout = await getLastestIntroduction();
      setAboutUs(fetchedAbout);
    } catch (error) {
      console.error("Error fetching about us:", error);
    }
  });

  const loadProducts = cache(async () => {
    try {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  });

  const getProductById = cache(async (id) => {
    try {
      const data = getItemById("san-pham", id);
      data.then((result) => {
        setProduct(result);
      });
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  });

  const loadProjects = cache(async () => {
    try {
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  });

  const getProjectById = cache(async (id) => {
    try {
      const data = getItemById("tin-tuc", id);
      data.then((result) => {
        setProject(result);
      });
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  });

  // const loadSolutions = cache(async () => {
  //   try {
  //     const fetchedProducts = await getProducts();
  //     setSolutions(fetchedProducts);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // });

  // const getSolutionById = cache(async () => {
  //   try {
  //     const data = getItemById("san-pham", id);
  //     data.then((result) => {
  //       setSolution(result);
  //     });
  //   } catch (error) {
  //     console.error("Error fetching product details:", error);
  //   }
  // });

  const value = {
    aboutUs,
    product,
    products,
    project,
    projects,
    solution,
    solutions,
    loadProducts,
    getProductById,
    loadProjects,
    getProjectById,
    loadIntroduction,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
