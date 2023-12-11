import { Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ProductsList from "../components/ProductsList";

const AdminProductsPage = () => {
  return (
    <Grid container justifyContent="flex-end" textAlign="end">
      <Grid item xs={12}>
        <Button LinkComponent={Link} to="/admin/products/new">
          Add Product
        </Button>
      </Grid>
      <Grid item xs={12}>
        <ProductsList
        // products={products}
        // onDeleteProduct={onDeleteProduct}
        />
      </Grid>
    </Grid>
  );
};

export default AdminProductsPage;
