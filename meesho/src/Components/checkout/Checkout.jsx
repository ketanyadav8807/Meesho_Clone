import { Step, StepLabel, Stepper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { CheckoutContext } from "../../Context/CheckoutContext";
import logo from "../../images/meeshoLogo.png";
export const Checkout = () => {
  const { steps, activeStep, completed, handleStep, handleNext } =
    useContext(CheckoutContext);

  const useStyles = makeStyles(() => ({
    root: {
      "& .Mui-active": { color: "#1976d2 !important" },
      "& .Mui-completed": { color: "#1976d2 !important" },
    },
  }));

  const c = useStyles();
  return (
    <div>
      <div style={{ margin: "1%", padding: "1%", display: "flex" }}>
        
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
      <Box sx={{display:"flex"}} >
      <Outlet />
      <hr />
      <div>Product Details</div>
      </Box>  
    </div>
  );
};
