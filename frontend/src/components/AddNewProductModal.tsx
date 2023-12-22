import { useMyContext } from "../context/MyContext";

const AddNewProductModal = () => {
  const { openAddModal, closeAddModal } = useMyContext();
  const handleOutsideClick = (e) => {
    // Eğer tıklanan alan modaldan dışındaysa, modalı kapat
    if (e.target === e.currentTarget) {
      closeAddModal();
    }
  };
  return (
    <div>
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen">
          <div
            onClick={(e) => handleOutsideClick(e)}
            className="flex min-h-full items-end justify-center overflow p-4 overflow-y-auto text-center sm:items-center sm:p-0"
          >
            <div className="relative my-10 transform min-h-full flex items-center justify-center w-full sm:w-4/6 md:w-4/6 lg:w-4/6 xl:w-4/6 rounded-lg bg-white text-left shadow-xl transition-all ">
              <div className="w-full max-w-s  ">
                <form className="bg-white w-full px-8 pt-6 pb-8 mb-4 ">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2"
                      htmlFor="title"
                    >
                      Title
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="title"
                      type="text"
                      placeholder="Title"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="description"
                      type="text"
                      placeholder="Description"
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
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="brand"
                      type="text"
                      placeholder="Brand"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2"
                      htmlFor="category"
                    >
                      Category
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="category"
                      type="text"
                      placeholder="Category"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2"
                      htmlFor="discountPercentage"
                    >
                      Discount Percentage
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="discountPercentage"
                      type="number"
                      placeholder="0"
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
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="price"
                      type="number"
                      placeholder="0"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2"
                      htmlFor="rating"
                    >
                      Rating
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="rating"
                      type="number"
                      placeholder="0"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2"
                      htmlFor="stock"
                    >
                      Stock
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="stock"
                      type="number"
                      placeholder="0"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2"
                      htmlFor="thumbnail"
                    >
                      Thumbnail
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="thumbnail"
                      type="file"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-lg font-bold mb-2"
                      htmlFor="images"
                    >
                      Images
                    </label>
                    <input
                      multiple
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="images"
                      type="file"
                      placeholder=""
                    />
                  </div>
                  <div className="flex items-center justify-start gap-3">
                    <button
                      className="bg-red-200 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={() => closeAddModal()}
                    >
                      Cancel
                    </button>
                    <button
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

export default AddNewProductModal;
