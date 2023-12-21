import { useNavigate } from "react-router-dom";
import Product from "../types/Product.ts";
import formatDescription from "../utils/formatDescription.ts";

const SingleProduct: React.FC = ({ product }: Product) => {
  const navigate = useNavigate();

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
    </tr>
  );
};

export default SingleProduct;
