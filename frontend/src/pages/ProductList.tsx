import React, { useEffect } from "react";
import AddNewProductModal from "../components/AddNewProductModal";
import Pagination from "../components/Pagination";
import SingleProduct from "../components/SingleProduct";
import { useMyContext } from "../context/MyContext";
import getAll from "../services/getAll";
import Product from "../types/Product";
const ProductList: React.FC = () => {
  const {
    productList,
    setProductList,
    openAddModal,
    closeAddModal,
    isOpenAdd,
  } = useMyContext();
  const fetchData = async () => {
    try {
      const products = await getAll();
      setProductList(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="px-20">
      <div className="flex justify-between w-full products-container my-10 pl-49">
        <h3 className="text-start text-2xl">Products</h3>
        <div className="right-section md:w-1/3 flexjustify-between">
          <input
            className="shadow appearance-none border resize-x w-4/5 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Find product"
          />
          <button
            onClick={() => openAddModal()}
            className="bg-blue-500 hover:bg-blue-700 ml-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            + New
          </button>
        </div>
      </div>
      <div className="products-body relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Thumbnail
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product: Product) => (
              <SingleProduct key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="productlist-footer mx-auto">
        <Pagination />
      </div>
      {isOpenAdd && <AddNewProductModal />}
    </div>
  );
};

export default ProductList;
