import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import deleteProduct from "../services/deleteProduct.ts";
import getAll from "../services/getAll.ts";
import Product from "../types/Product.ts";
import formatDescription from "../utils/formatDescription.ts";
import { useMyContext } from "../context/MyContext.tsx";
const SingleProduct = ({ product }: Product) => {
  const { productList, setProductList } = useMyContext();
  const navigate = useNavigate();
  const handleDelete = async (id: number) => {
    await deleteProduct(id);
    const newProductList = await getAll();
    setProductList(newProductList);
  };
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td scope="row" className="px-6 py-4">
        <img
          className="object-cover h-16 w-36 hover:object-scale-down"
          src={product.thumbnail}
          alt={product.description}
        />
      </td>
      <td
        className="px-6 text-lg py-4 text-gray-900 underline hover:cursor-pointer"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        {product.title}
      </td>
      <td className="px-6 py-4 text-base text-gray-400 text-end">
        {formatDescription(product.description)}
      </td>
      <td>
        <RiDeleteBin5Line
          onClick={() => handleDelete(product.id)}
          style={{ color: "red", width: 25 }}
        />
      </td>
    </tr>
  );
};

export default SingleProduct;
