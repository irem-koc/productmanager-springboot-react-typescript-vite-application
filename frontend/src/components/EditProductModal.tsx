import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMyContext } from "../context/MyContext";
import getById from "../services/getById";
import updateProduct from "../services/updateProduct";
import Product from "./../types/Product";
const EditProductModal = ({ product }: Product) => {
  const { openEditModal, closeEditModal } = useMyContext();
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [brand, setBrand] = useState(product.brand);
  const handleOutsideClick = (e) => {
    // Eğer tıklanan alan modaldan dışındaysa, modalı kapat
    if (e.target === e.currentTarget) {
      closeEditModal();
    }
  };
  const { id } = useParams();
  return (
    <div>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div
            onClick={(e) => handleOutsideClick(e)}
            className="flex min-h-full items-end w-full justify-center p-4 text-center items-center "
          >
            <div className="relative transform min-h-full flex items-center justify-center overflow w-full sm:w-4/6 md:w-4/6 lg:w-4/6 xl:w-4/6 rounded-lg bg-white text-left shadow-xl transition-all ">
              <div className="w-full max-w-s">
                <form className="bg-white w-full px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2"
                      htmlFor="title"
                    >
                      Title
                    </label>
                    <input
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="title"
                      type="text"
                      placeholder="Title"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2"
                      htmlFor="price"
                    >
                      Price
                    </label>
                    <input
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="price"
                      type="number"
                      placeholder="Price"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2"
                      htmlFor="brand"
                    >
                      Brand
                    </label>
                    <input
                      onChange={(e) => setBrand(e.target.value)}
                      value={brand}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="brand"
                      type="text"
                      placeholder="Brand"
                    />
                  </div>
                  <div className="flex items-center justify-start gap-3">
                    <button
                      className="bg-red-200 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={() => closeEditModal()}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        updateProduct(id, title, price, brand);
                        closeEditModal();
                        console.log("a");

                        getById(id);

                        console.log("b");
                      }}
                      className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
