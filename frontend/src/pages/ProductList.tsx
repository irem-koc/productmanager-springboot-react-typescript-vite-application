import React, { useEffect, useState } from "react";
import getAll from "../services/getAll";
import { Product } from "../type/Product";
const ProductList: React.FC = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const fetchData = async () => {
    try {
      const products = await getAll();
      setProductList(products);
      // Do something with the products
    } catch (error) {
      // Handle errors
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <div>{JSON.stringify(productList)}</div>;
};

export default ProductList;
