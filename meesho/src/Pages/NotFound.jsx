import React from "react";
import { Button, Typography } from "@mui/material";
import { ReportProblemOutlined } from "@material-ui/icons";
export const NotFound = () => {
  return (
    <div style={{ textAlign: "center", height: "80vh", paddingTop: "10%" }}>
      <div
        style={{
          width: "12%",
          height:"90%",
          textAlign: "center",
          margin:"-5% auto"
        }}
      >
        <div
          style={{
            borderRadius: "50%",
            height: "50%",
            backgroundColor: "rgb(221,221,221)",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ReportProblemOutlined
            htmlColor="rgb(172,172,172)"
            style={{ height: "90px", width: "175px" }}
            fontSize="125px"
          />
        </div>
      </div>
      <Typography color="rgb(102, 102, 102)" fontWeight={700} fontSize="1.2em">
        We couldn't find what you were looking for. Please try again.
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          textTransform: "capitalize",
          fontSize: "18px",
          fontWeight: "500",
          width: "15vw",
          marginTop: "2%",
          height: "8vh",
          ":hover": {
            backgroundColor: "rgb(244,51,151)",
          },
        }}
        disableRipple
        disableElevation
        onClick={() => window.location.reload()}
      >
        <svg
          width="20"
          height="20"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
          class="Icon-sc-1iwi4w1-0 bjBRDo ErrorPageDesktop__SolidButtonBigStyled-sc-sbfu8m-2 efOoZc"
          btntype="solid"
          ml="4"
          mr="4"
          stroke="#ffffff"
          iconsize="20"
          style={{ marginRight: "3%" }}
        >
          <path d="M10 0a10 10 0 016.833 2.717V1.05a.833.833 0 011.667 0v3.742c0 .46-.373.833-.833.833h-3.742a.833.833 0 010-1.667h1.8A8.333 8.333 0 1018.333 10 .833.833 0 0120 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0z"></path>
        </svg>
        Reload
      </Button>
    </div>
  );
};
