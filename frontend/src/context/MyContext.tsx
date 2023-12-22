import { ReactNode, createContext, useContext, useState } from "react";
import Product from "../types/Product";
type ShoppingCartProviderProps = {
  children: ReactNode;
};
interface MyContext {
  openAddModal: () => void;
  closeAddModal: () => void;
  openEditModal: () => void;
  closeEditModal: () => void;
  productList: Product[];
  setProductList: React.Dispatch<React.SetStateAction<never[]>>;
  isOpenAdd: boolean;
  isOpenEdit: boolean;
}
const MyContext = createContext<MyContext | undefined>(undefined);
export function useMyContext() {
  return useContext(MyContext);
}
export const ContextProvider = ({ children }: ShoppingCartProviderProps) => {
  const [productList, setProductList] = useState([]);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const openAddModal = () => setIsOpenAdd(true);
  const closeAddModal = () => setIsOpenAdd(false);
  const openEditModal = () => setIsOpenEdit(true);
  const closeEditModal = () => setIsOpenEdit(false);
  const values: MyContext = {
    productList,
    setProductList,
    openAddModal,
    closeAddModal,
    openEditModal,
    closeEditModal,
    isOpenAdd,
    isOpenEdit,
  };
  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};
