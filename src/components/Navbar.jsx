import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Badge,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Switch,
} from "@mui/material";
import {
  Brightness4,
  Home,
  MoreVert,
  ShoppingCart,
  ShoppingCartCheckout,
} from "@mui/icons-material";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";
import { UserInterfaceContext } from "../contexts/UserInterfaceContext";

const Navbar = ({
  cartItemsCount,
  onToggleCartSummaryVisibility,
  isCartSummary,
}) => {
  const { isDarkMode, toggleDarkMode } = useContext(UserInterfaceContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <IconButton color="inherit" onClick={handleMenu}>
              <MoreVert />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuList sx={{ width: 300 }}>
                <MenuItem>
                  <ListItemIcon>
                    <Brightness4 fontSize="medium" />
                  </ListItemIcon>
                  <ListItemText>
                    Appearance: {isDarkMode ? "Dark" : "Light"}
                  </ListItemText>
                  <Typography variant="body2" color="text.secondary">
                    <Switch value={isDarkMode} onChange={toggleDarkMode} />
                  </Typography>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
