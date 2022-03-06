import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Address } from './Pages/Address';
import { Cart } from './Pages/Cart';
import { Dashboard } from './Pages/Dashboard';
import { ThemeProvider, createTheme } from "@mui/material";
import { Signup } from './LSPL/Signup';
import { Otp } from './LSPL/Otp';
import { Auth, Login } from './Pages/Auth';
import { Checkout } from './Pages/Checkout';
import SnackbarProvider from 'react-simple-snackbar'


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
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
        <Routes>
          <Route index path="/*" element={<Dashboard />} />
          <Route path="/checkout/*" element={<Checkout />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="*" element={<Auth />} />
        </Routes>
      </SnackbarProvider>
      </ThemeProvider>

    </div>
  );
}
export default App;
