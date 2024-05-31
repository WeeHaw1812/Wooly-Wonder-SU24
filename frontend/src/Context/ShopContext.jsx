import { createContext } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = () => {
  return <div>ShopContext</div>;
};

export default ShopContextProvider;
