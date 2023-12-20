import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getById from "../services/getById";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const fetchData = async (id: string | undefined) => {
    try {
      setProduct(await getById(id ?? ""));
    } catch (error) {
      // Handle errors
      console.error("Error fetching product:", error);
    }
  };
  useEffect(() => {
    fetchData(id);
  }, [id]);
  return <div>{JSON.stringify(product)}</div>;
};

export default Product;
