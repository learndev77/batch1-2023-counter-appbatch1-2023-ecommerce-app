import React, { createContext, useState } from "react";
import { PRODUCTS_DATA } from "../data/products";

export const ProductContext = createContext({
  products: [],
  onDeleteProduct: () => {},
  // onAddProduct, onEditProduct
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS_DATA);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // handleAddProduct
  // handleEditProduct

  return (
    <ProductContext.Provider
      value={{
        products: products,
        onDeleteProduct: handleDeleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
