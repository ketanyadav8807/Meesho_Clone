import { Product } from "./Components/PageProducts/Product";
import { ThemeProvider, createTheme } from "@mui/material";
import { ProductDetail } from "./Components/productDetails/ProductDetail";
import { Route, Routes } from "react-router-dom";
import { Checkout } from "./Components/checkout/Checkout";
import "./App.css";
import Footer from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { Sub_Navbar } from "./Components/Sub_Navbar";
import Home from "./Pages/Home";
import { Address } from "./Components/PageProducts/Address";
import { Cart } from "./Components/checkout/Cart";
import { CheckoutContextProvider } from "./Context/CheckoutContext";

function App() {
  const theme = createTheme({
    stepper: {
      iconColor: "green", // or logic to change color
    },
    palette: {
      primary: {
        main: "rgb(244, 51, 151);",
      },
      secondary: {
        main: "#1976d2",
      },
    },
    typography: {
      fontFamily: ["Mier-Book", "Mier-Bold", "Arial", "sans-serif"].join(","),
    },
  });

  return (
    <div className="container">
      <CheckoutContextProvider>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Sub_Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />}>
              <Route path="address" element={<Address />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
          <Footer />
        </ThemeProvider>
      </CheckoutContextProvider>
    </div>
  );
}
export default App;
