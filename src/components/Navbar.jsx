import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge } from "@mui/material";
import { Home, ShoppingCart, ShoppingCartCheckout } from "@mui/icons-material";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";

const Navbar = ({
  cartItemsCount,
  onToggleCartSummaryVisibility,
  isCartSummary,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            E-Commerce App
          </Typography>
          <Box sx={{ flexGrow: 1, marginLeft: 5 }} />
          <Box sx={{ display: "flex" }}>
            <IconButton
              size="large"
              color="inherit"
              LinkComponent={Link}
              to={`${isCartSummary ? "/" : "/cart-summary"}`}
            >
              <Badge
                badgeContent={isCartSummary ? null : cartItemsCount}
                color="error"
              >
                {isCartSummary ? <Home /> : <ShoppingCart />}
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
