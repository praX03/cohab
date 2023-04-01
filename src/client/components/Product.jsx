import React from "react";
import ProductCardContext from "../utils/ProductCardContext";

export const Product = ({ image, info }) => {
  return (
    <ProductCardContext>
      <div className="flex flex-col items-center justify-center h-screen m-auto">
        {image}
        <div>{info}</div>
      </div>
    </ProductCardContext>
  );
};

export const ProductImage = ({ image }) => {
  return <div className="border-2 border-dashed w-fit h-fit">{image}</div>;
};

export const ProductInfo = ({ children }) => {
  return (
    <div className="border-2 border-red-700 border-dashed w-fit">
      {children}
    </div>
  );
};

export const ProductCategory = ({ children }) => {
  return <div>{children}</div>;
};

export const ProductTitle = ({ children }) => {
  return <div>{children}</div>;
};

export const ProductRating = ({ children }) => {
  return <div>{children}</div>;
};
