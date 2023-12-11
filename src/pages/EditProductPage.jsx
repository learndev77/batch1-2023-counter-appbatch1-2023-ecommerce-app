import React, { useContext, useMemo } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const EditProductPage = () => {
  const { products } = useContext(ProductContext);
  const params = useParams();

  //   const product = products.find((product) => product.id === +params.id);

  const product = useMemo(
    () => products.find((product) => product.id === +params.id),
    [params.id, products]
  );

  const { id, title, description, price, quanityInStock, image } = product;
  return (
    <ProductForm
    // initialValue={{title, description}}
    // onSubmit
    />
  );
};

export default EditProductPage;
