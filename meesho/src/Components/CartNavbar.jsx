import React, { useContext } from "react";
import "../CSS/CartNavbar.css"
import { Step, StepLabel, Stepper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";
import { CheckoutContext } from "../Context/CheckoutContext";
import logo from "../images/meeshoLogo.png";

export const CartNavbar = () => {

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
    <div className='cartNavbar'>
        <img src={require("../images/meeshoLogo.png")} alt="" />
        <div>
      <div style={{ margin: "1%", padding: "1%", display: "flex" }}>
        <img src={logo} height="36px" alt="logo" />
        <Stepper className={c.root} activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <hr
        style={{
          border: "none",
          borderBottom: "1px solid rgb(201,201,201",
          marginBottom: "2%",
        }}
      />
      <Box sx={{display:"flex", justifyContent:"center",alignItems:"center"}} >
      <Outlet />
      </Box>
    </div>
    </div>
  )
}
