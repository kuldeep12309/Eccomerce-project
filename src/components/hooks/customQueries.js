import React from "react";
import { useState, useEffect } from "react";


const customQueries = (urlpath) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoader(true);
      setError(false);
      try {
        const response = await fetch(urlpath);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Network Error:", error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    fetchProducts();
  }, []);
  return [products, error, loader];
};

export default customQueries;
