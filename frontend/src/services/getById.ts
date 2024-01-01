import { api } from "../types/api";

const getById = async (id: number | undefined) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default getById;
