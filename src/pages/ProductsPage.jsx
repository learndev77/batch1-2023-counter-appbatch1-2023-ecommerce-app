import React from "react";
import Products from "../components/Products";

const ProductsPage = ({
  //   products,
  onAddToCart,
  onRemoveFromCart,
  cartItems,
}) => {
  return (
    <Products
      // products={products}
      onAddToCart={onAddToCart}
      onRemoveFromCart={onRemoveFromCart}
      cartItems={cartItems}
    />
  );
};

export default ProductsPage;
