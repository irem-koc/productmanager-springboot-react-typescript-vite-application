import { api } from "../types/api";

const deleteProduct = async (id: number | undefined) => {
  try {
    await api.delete(`/products/${id}`);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default deleteProduct;
