import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../App.css";
import { Address } from "../Pages/Address";
import { Cart } from "./Cart";
import { ThemeProvider, createTheme } from "@mui/material";
import { CartNavbar } from "../Components/CartNavbar";
import { Step, StepLabel, Stepper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import { CheckoutContext } from "../Context/CheckoutContext";
import { ThankyouPage } from "./ThankyouPage";
// import logo from "../../images/meeshoLogo.png";

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

  const { steps, activeStep, completed, handleStep, handleNext } =
    useContext(CheckoutContext);
  const useStyles = makeStyles(() => ({
    root: {
      "& .Mui-active": { color: "#1976D2 !important" },
      "& .Mui-completed": { color: "#1976D2 !important" },
    },
  }));
  const c = useStyles();

  return (
    <div className="container">
      <ThemeProvider theme={theme}>
        <CartNavbar />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/address" element={<Address />} />
          <Route path="/Thankyou" element={<ThankyouPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};
