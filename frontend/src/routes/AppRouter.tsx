import { Route, Routes } from "react-router-dom";
import Product from "../components/Product";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<Product />} />
    </Routes>
  );
};

export default AppRouter;
