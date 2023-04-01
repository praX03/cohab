import React from "react";
import {
  Product,
  ProductCategory,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductRating,
} from "../components/Product.jsx";

const product = {
  id: 1,
  image: "this is an image",
  title: "this is the title",
  rating: "this is rating",
  category: "this is category",
};

function about() {
  return (
    <Product
      image={<ProductImage image={product.image} />}
      info={
        <ProductInfo>
          <ProductCategory>{product.category}</ProductCategory>
          <ProductRating>{product.rating}</ProductRating>
          <ProductTitle>{product.title}</ProductTitle>
        </ProductInfo>
      }
    />
  );
}

export default about;
