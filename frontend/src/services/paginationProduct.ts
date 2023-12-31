import { api } from "../types/api";

const paginationProduct = async (offset: number, pageSize: number) => {
  try {
    const response = await api.get(
      `/products/pagination/${offset}/${pageSize}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export default paginationProduct;
