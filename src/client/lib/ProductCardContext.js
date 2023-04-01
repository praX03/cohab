import { createContext, useContext } from "react";

const ProductCardContext = createContext(null);

export function useProductCardContext() {
  const context = useContext(ProductCardContext);
  if (!context) {
    throw new Error("Product Card child Error");
  }
  return context;
}

export default ProductCardContext;
