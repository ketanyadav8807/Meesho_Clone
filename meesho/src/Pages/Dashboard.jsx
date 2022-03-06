import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material";
import '../App.css';
import Footer from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { Sub_Navbar } from "../Components/Sub_Navbar";

export const Dashboard = () => {
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
        <Navbar />
        <Sub_Navbar />
        <Footer />
      </ThemeProvider>
    </div>
  );

}

