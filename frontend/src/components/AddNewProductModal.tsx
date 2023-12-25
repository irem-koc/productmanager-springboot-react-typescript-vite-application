import { useState } from "react";
import { useMyContext } from "../context/MyContext";
import addProduct from "../services/addProduct";
import formatImagestoString from "../utils/formatImagestoString";

const AddNewProductModal = () => {
  const { openAddModal, closeAddModal } = useMyContext();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [discountPercentage, setDiscountPercentage] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [rating, setRating] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [thumbnail, setThumbnail] = useState<string>("");
  const [images, setImages] = useState<string>();

  const handleOutsideClick = (e) => {
    // Eğer tıklanan alan modaldan dışındaysa, modalı kapat
    if (e.target === e.currentTarget) {
      closeAddModal();
    }
  };
  const handleSave = async () => {
    await addProduct(
      title,
      description,
      brand,
      category,
      discountPercentage,
      price,
      rating,
      stock,
      thumbnail,
      images
    );
    closeAddModal();
  };
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Dosya varsa, URL'yi alabilirsiniz
      const url = URL.createObjectURL(file);
      setThumbnail(url);
      console.log(typeof url);
    } else {
      // Dosya seçilmediyse, boş bir URL veya başka bir değer atayabilirsiniz
      setThumbnail("");
    }
  };
  const handleImagesChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      // Dosya varsa, her bir dosyanın URL'sini alabilirsiniz
      const imageUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages(formatImagestoString(imageUrls));
    } else {
      // Dosya seçilmediyse veya iptal edildiyse, boş bir array atanır
      setImages("");
    }
  };
  console.log("images", images);
  console.log("thumbnail", thumbnail);
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          onClick={(e) => handleOutsideClick(e)}
          className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div className="relative overflow-auto max-h-full my-10 transform flex items-center justify-center w-full sm:w-4/6 md:w-4/6 lg:w-4/6 xl:w-4/6 rounded-lg bg-white text-left shadow-xl transition-all ">
            <div className="w-full max-w-s  ">
              <form className="bg-white w-full px-8 pt-6 pb-8 mb-4 overflow-auto">
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
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <input
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
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
                    onChange={(e) => setBrand(e.target.value)}
                    value={brand}
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
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
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
                    onChange={(e) =>
                      setDiscountPercentage(Number(e.target.value))
                    }
                    value={discountPercentage}
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
                    onChange={(e) => setPrice(Number(e.target.value))}
                    value={price}
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
                    onChange={(e) => setRating(Number(e.target.value))}
                    value={rating}
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
                    onChange={(e) => setStock(Number(e.target.value))}
                    value={stock}
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
                    onChange={(e) => handleThumbnailChange(e)}
                    accept=".png, .jpg, .jpeg, .svg"
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
                    onChange={(e) => handleImagesChange(e)}
                    accept=".png, .jpg, .jpeg, .svg"
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
                    onClick={() => handleSave()}
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
  );
};

export default AddNewProductModal;
