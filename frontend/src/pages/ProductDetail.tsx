import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditProductModal from "../components/EditProductModal";
import { useMyContext } from "../context/MyContext";
import getById from "../services/getById";
import Product from "../types/Product";
import formatImagesKey from "../utils/formatImagesKey";

const ProductDetail: React.FC = () => {
  const { openEditModal, isOpenEdit } = useMyContext();
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();
  const fetchData = async (id: number) => {
    try {
      setProduct(await getById(Number(id) ?? undefined));
    } catch (error) {
      // Handle errors
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchData(Number(id));
  }, [id]);
  return (
    <div>
      <div className="detail-container px-20">
        <div className="edit_section flex justify-end mt-10">
          <button
            onClick={() => openEditModal()}
            className="bg-blue-900 hover:bg-blue-700 ml-2 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Edit
          </button>
        </div>
        <div className="thumbnail flex justify-center ">
          <img src={product?.thumbnail} alt={product?.description} />
        </div>
        <div className="information flex flex-col mt-5 justify-start">
          <h5 className="text-lg font-bold">Brand: {product?.brand}</h5>

          <h5 className="text-lg font-bold">Title: {product?.title}</h5>

          <h5 className="text-lg font-bold">Price: {product?.price}</h5>
        </div>
        <div className="descr italic text-xl my-5">{product?.description}</div>
        <div className="images-section mb-10 flex flex-wrap justify-around items-center gap-3 ">
          {product?.images &&
            formatImagesKey(product.images).map((url: string) => (
              <img
                key={url}
                className="w-1/4 object-cover"
                src={url}
                alt={`Product Image ${url}`}
              />
            ))}
        </div>
      </div>
      <div className="fixed w-screen max-w-lg">
        {isOpenEdit && (
          <EditProductModal product={product} setProduct={setProduct} />
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
