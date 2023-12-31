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
  filterValue: string;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
  pageItem: number;
  setPageItem: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
const MyContext = createContext<MyContext | undefined>(undefined);
export function useMyContext() {
  return useContext(MyContext);
}
export const ContextProvider = ({ children }: ShoppingCartProviderProps) => {
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [pageItem, setPageItem] = useState(10);
  const [filterValue, setFilterValue] = useState("");
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
    filterValue,
    setFilterValue,
    pageItem,
    setPageItem,
    currentPage,
    setCurrentPage,
  };
  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};
