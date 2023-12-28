import { api } from "../types/api";

const filterProduct = async (description: string) => {
  try {
    const response = await api.get(
      `/products/byDescription?description=${description}`
    );
    console.log("response 1", response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default filterProduct;
