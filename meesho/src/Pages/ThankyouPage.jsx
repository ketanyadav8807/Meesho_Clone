import React from "react";
import { Link } from "@mui/material";
import { FaTruckMoving } from "react-icons/fa";
export const ThankyouPage = () => {
  return (
    <div style={{ margin: "15% 0%" }}>
      <div style={{ margin: "0% auto", textAlign: "center" }}>
        <FaTruckMoving color="rgba(244,51,151,0.5)" fontSize={"72px"} />
      </div>
      Thank you!! Your order has been placed, want to{" "}
      <Link
        href={"/"}
        sx={{
          ":after": { color: "black" },
          ":onMouseOver": { color: "rgb(244,51,151)" },
          textDecoration: "none",
        }}
      >
        shop more?
      </Link>
    </div>
  );
};
