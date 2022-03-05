import React from 'react';
import { Route, Routes } from "react-router-dom";
import '../App.css';
import { Address } from '../Components/PageProducts/Address';
import { Cart } from './Cart';
import { ThemeProvider, createTheme } from "@mui/material";
import { CartNavbar } from '../Components/CartNavbar';

export const Checkout = () => {
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
    <div className="container">
      <ThemeProvider theme={theme}>
          <CartNavbar/>
        <Routes>
          <Route path='/cart' element={<Cart />} />
          <Route path="/address" element={<Address />} />
        </Routes>
      </ThemeProvider>
    </div>
  );

}

