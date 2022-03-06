import { Button } from "@mui/material";
import React, { useContext } from "react";

import { CheckoutContext } from "../../Context/CheckoutContext";

export const Cart = () => {
  const { handleNext } = useContext(CheckoutContext);
  return (
    <div>
      Cart
      <Button onClick={handleNext}> save and Continue</Button>
    </div>
  );
};
