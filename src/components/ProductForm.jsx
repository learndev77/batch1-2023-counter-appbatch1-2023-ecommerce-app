import { Card, CardContent, CardHeader, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const ProductForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    quantityInStock: "",
    image: "",
  });

  const handleChange = () => {
    // title - required
    // description
    // price - required minimum 0.1
    // image optional - uri
    console.log("handleChange");
  };

  return (
    <Grid container justifyContent="center" component="form">
      <Grid item xs={6}>
        <Card>
          <CardHeader title={`Add Product`} />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="title"
                  value={form.title}
                  label="Title"
                  onChange={handleChange}
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="description"
                  value={form.description}
                  label="Description"
                  onChange={handleChange}
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="price"
                  value={form.price}
                  label="Price"
                  onChange={handleChange}
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="quantityInStock"
                  value={form.quantityInStock}
                  label="Stock"
                  onChange={handleChange}
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="image"
                  value={form.image}
                  label="Image"
                  onChange={handleChange}
                  variant="standard"
                  fullWidth
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProductForm;
