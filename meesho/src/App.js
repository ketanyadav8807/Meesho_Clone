import { Product } from "./Components/PageProducts/Product";
import { ThemeProvider, createTheme } from "@mui/material";
import { ProductDetail } from "./Components/productDetails/ProductDetail";
import { Route, Routes } from "react-router-dom";
// import './App.css';
import Footer from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { Sub_Navbar } from "./Components/Sub_Navbar";
import Home from "./Pages/Home";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(244, 51, 151);",
      },
    },
    typography: {
      fontFamily: ["Mier-Book", "Mier-Bold", "Arial", "sans-serif"].join(","),
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Sub_Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );

}
export default App;

