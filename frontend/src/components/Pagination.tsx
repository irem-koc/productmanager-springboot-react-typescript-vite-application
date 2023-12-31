import { useEffect, useState } from "react";
import { useMyContext } from "../context/MyContext";
import getAll from "../services/getAll";
import paginationProduct from "../services/paginationProduct";

const Pagination: React.FC = () => {
  const {
    productList,
    pageItem,
    setPageItem,
    setProductList,
    currentPage,
    setCurrentPage,
  } = useMyContext();
  const [products, setProducts] = useState([]);

  const fetched = async () => {
    try {
      const products = await getAll();
      setProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetched();
  }, []);
  const length_prod = products.length;
  const remain = length_prod % pageItem;

  const handleChange = async (e) => {
    const newValue = e.target.value;
    setPageItem(() => {
      return newValue;
    });
  };
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };
  const fetchData = async () => {
    try {
      // Assuming filterProduct returns a promise
      if (pageItem > 0) {
        const filteredProducts = await paginationProduct(currentPage, pageItem);
        setProductList(filteredProducts);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [pageItem, currentPage]);
  return (
    <div className="my-10 flex justify-center items-center gap-3">
      <div className="inline-block relative w-64">
        <select
          value={pageItem}
          onChange={handleChange}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          {Array.from({ length: 10 }, (_, index) => (
            <option key={index + 1}>{index + 1}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <div className="inline-flex">
        <button
          disabled={currentPage === 0}
          onClick={() => handlePrevPage()}
          className="bg-gray-300 mr-3 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Prev
        </button>
        <button
          disabled={remain == productList.length}
          onClick={() => handleNextPage()}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
