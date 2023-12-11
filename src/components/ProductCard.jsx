import {
  Add,
  AddShoppingCart,
  Delete,
  Remove,
  ShoppingBag,
  ShoppingCart,
} from '@mui/icons-material'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const ProductCard = ({ product, onAddToCart, cartItem, onRemoveFromCart }) => {
  const renderCartActions = () => {
    if (cartItem) {
      return (
        <Grid container spacing={3} direction="row" justifyContent="center">
          <Grid item xs={5}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => onRemoveFromCart(product)}
            >
              <Remove />
            </Button>
          </Grid>
          <Grid item xs={2} sx={{ textAlign: "center" }}>
            <Typography variant="body2">{cartItem.quantity}</Typography>
          </Grid>
          <Grid item xs={5}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => onAddToCart(product)}
            >
              <Add />
            </Button>
          </Grid>
        </Grid>
      );
    } else {
      return (
        <Button
          onClick={() => onAddToCart(product)}
          fullWidth
          startIcon={<AddShoppingCart />}
        >
          Add to Cart
        </Button>
      );
    }
  };
  return (
    <Card>
      <CardHeader title={product.title} subheader={`P${product.price}`} />
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="body2" color="text-secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        {renderCartActions()}
        {/* {cartItem ? (
          <Button
            onClick={() => onAddToCart(product)}
            fullWidth
            startIcon={<Remove />}
            endIcon={<Add />}
          >
            {cartItem.quantity}
          </Button>
        ) : (
          <Button
            onClick={() => onAddToCart(product)}
            fullWidth
            startIcon={<AddShoppingCart />}
          >
            Add to Cart
          </Button>
        )} */}
      </CardActions>
    </Card>
  );
};

export default ProductCard
