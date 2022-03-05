import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Address } from './Components/PageProducts/Address';
import { Cart } from './Pages/Cart';
import { Dashboard } from './Pages/Dashboard';
import { ThemeProvider, createTheme } from "@mui/material";
import { Signup } from './LSPL/Signup';
import { Otp } from './LSPL/Otp';
import { Auth, Login } from './Pages/Auth';
import { Checkout } from './Pages/Checkout';

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
    <div className="container">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/checkout/*" element={<Checkout />} />
          <Route path="/auth/*" element={<Auth />} />
        </Routes>
      </ThemeProvider>

    </div>
  );

}
export default App;

