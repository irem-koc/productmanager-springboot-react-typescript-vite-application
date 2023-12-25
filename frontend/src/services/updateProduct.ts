import { api } from "../types/api";

const updateProduct = async (
  id: number | undefined,
  title: string,
  price: number,
  brand: string
) => {
  try {
    const response = await api.put(`/products/${id}`, {
      title: title,
      price: price,
      brand: brand,
    });
    console.log("response 2", response.data);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default updateProduct;
