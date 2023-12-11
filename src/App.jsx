import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Container } from "@mui/system";
import { useContext, useState } from "react";
import CartSummary from "./components/CartSummary";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { PRODUCTS_DATA } from "./data/products";
import ProductsPage from "./pages/ProductsPage";
import { Route, Routes, useLocation } from "react-router-dom";
import CartSummaryPage from "./pages/CartSummaryPage";
import AdminProductPage from "./pages/AdminProductsPage";
import AdminProductsPage from "./pages/AdminProductsPage";
import AddProductPage from "./pages/AddProductPage";
import { pink } from "@mui/material/colors";
import { UserInterfaceContext } from "./contexts/UserInterfaceContext";

function App() {
  const [cartItems, setCartItems] = useState([]);
  // const [showCartSummary, setShowCartSummary] = useState(false);
  const location = useLocation();

  const handleAddToCart = (product) => {
    let cartItem = cartItems.find((item) => item.product.id === product.id);
    if (cartItem) {
      // cartItem = { ...cartItem, count: cartItem.quantity + 1 }
      setCartItems(
        cartItems.map((ci) => {
          if (ci.product.id === product.id) {
            return { ...ci, quantity: ci.quantity + 1 };
          }
          return ci;
        })
      );
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    let cartItem = cartItems.find((item) => item.product.id === product.id);
    // cartItem = { ...cartItem, count: cartItem.quantity + 1 }

    if (cartItem.quantity === 1) {
      setCartItems(cartItems.filter((ci) => ci.product.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((ci) => {
          if (ci.product.id === product.id) {
            return {
              ...ci,
              quantity: ci.quantity - 1,
            };
          }
          return ci;
        })
      );
    }
  };

  // const toggleShowCartSummary = () => {
  //   setShowCartSummary(!showCartSummary);
  // };

  const isCartSummary = () => {
    return location.pathname === "/cart-summary";
  };

  const { isDarkMode } = useContext(UserInterfaceContext);

  const theme = createTheme({
    palette: {
      primary: {
        main: pink[100],
      },
      mode: isDarkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar
        cartItemsCount={cartItems.length}
        // onToggleCartSummaryVisibility={toggleShowCartSummary}
        isCartSummary={isCartSummary()}
      />
      <Container sx={{ marginTop: 5 }}>
        <Routes>
          <Route
            path="/"
            element={
              <ProductsPage
                // products={products}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
                cartItems={cartItems}
              />
            }
          />
          <Route
            path="/cart-summary"
            element={<CartSummaryPage cartItems={cartItems} />}
          />
          <Route
            path="/admin/products"
            element={
              <AdminProductsPage
              // onDeleteProduct={handleDeleteProduct}
              // products={products}
              />
            }
          />
          <Route path="/admin/products/new" element={<AddProductPage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
