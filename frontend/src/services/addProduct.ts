import { api } from "../types/api";

const addProduct = async (
  title: string,
  description: string,
  brand: string,
  category: string,
  discountPercentage: number,
  price: number,
  rating: number,
  stock: number,
  thumbnail: string,
  images: string | undefined
) => {
  try {
    const response = await api.post("/products", {
      title: title,
      description: description,
      brand: brand,
      category: category,
      discountPercentage: discountPercentage,
      price: price,
      rating: rating,
      stock: stock,
      thumbnail: thumbnail,
      images: images,
    });
    console.log("response 2", response.data);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
export default addProduct;
