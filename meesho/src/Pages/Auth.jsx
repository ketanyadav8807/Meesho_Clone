import React from 'react';
import { Route, Routes } from "react-router-dom";
import '../App.css';
import { ThemeProvider, createTheme } from "@mui/material";
import { Signup } from '../LSPL/Signup';
import { Otp } from '../LSPL/Otp';
import { Navbar } from '../Components/Navbar';
import { AuthNavbar } from '../Components/AuthNavbar';
import { CartNavbar } from '../Components/CartNavbar';

export const Auth = () => {
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
      {/* <AuthNavbar/> */}
      <CartNavbar/>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path="/otp" element={< Otp/>} />
      </Routes>
    </ThemeProvider>
  </div>
  )
}
