import { ReactNode, createContext, useContext, useState } from "react";
import Product from "../types/Product";
type ShoppingCartProviderProps = {
  children: ReactNode;
};
interface MyContext {
  //   openAddModal: () => void;
  //   closeAddModal: () => void;
  //   openEditModal: () => void;
  //   closeEditModal: () => void;
  //   addProduct: (product: Product) => void;
  //   editProduct: (
  //     id: number,
  //     title?: string,
  //     price?: string,
  //     brand?: string
  //   ) => void;
  productList: Product[];
  setProductList: React.Dispatch<React.SetStateAction<Product[]>>;
}
const MyContext = createContext<MyContext | undefined>(undefined);
export function useMyContext() {
  return useContext(MyContext);
}

export const ContextProvider = ({ children }: ShoppingCartProviderProps) => {
  const [productList, setProductList] = useState([]);
  const values: MyContext = { productList, setProductList };
  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};
