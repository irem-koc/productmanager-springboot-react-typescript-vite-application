import { api } from "../types/api";

const getById = async (id: string | undefined) => {
  try {
    const response = await api.get(`/products/${id}`);
    console.log("response 1", response);

    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default getById;
