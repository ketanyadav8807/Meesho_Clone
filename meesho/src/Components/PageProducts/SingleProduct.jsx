import React from "react";
import {
  Grid,
  Box,
  Card,
  CardMedia,
  Typography,
  CardContent,
} from "@mui/material";
export const SingleProduct = ({
  images,
  title,
  originalPrice,
  discountedPrice,
  freeDelivery,
  rating,
}) => {
  let ratingBgColor = "green";

  if(rating < 2){
    ratingBgColor = "red";
     
  }
  else if(rating >2 && rating < 3.5){
    ratingBgColor = "orange";
  }
  
  return (
    <Grid
      item
      lg={3}
      md={6}
      xs={12}
      height="320px"
      sx={{ marginBottom: "80px" }}
    >
      <Card variant="outlined">
        <CardMedia
          component="img"
          alt="productImg"
          height="220px"
          box-sizing="border-box"
          image={images}
        />
        <CardContent sx={{ fontSize: "14px" }}>
          <Typography
            component="div"
            color="gray"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: "14px",
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              omponent="div"
              color="gray"
              align="left"
              color="black"
              component="p"
              sx={{ marginRight: "5px" }}
            >
              Rs.{discountedPrice}
            </Typography>
            <Typography
              color="gray"
              align="left"
              component="p"
              sx={{ marginRight: "5px", textDecoration: "line-through" }}
            >
              {originalPrice}
            </Typography>
            <Typography
              color="green"
              align="left"
              component="p"
              sx={{ fontSize: "14px" }}
            >
              18% off
            </Typography>
          </Box>
          <Typography
            align="left"
            component="p"
            sx={{
              display: { freeDelivery },
              padding: "1px 2px",
              backgroundColor: "rgb(249, 249, 249)",
              width: "fit-content",
              fontSize: "14px",
              borderRadius: "5px",
            }}
          >
            free Delivery
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignContent: "flex-start",
              fontSize: "14px",
              alignItems: "center",
            }}
          >
            <Typography
              color="white"
              align="left"
              component="p"
              sx={{
                padding: "2px 5px",
                width: "fit-content",
                fontSize: "14px",
                borderRadius: "40px",
                border: "1px solid rgb(249, 249, 249)",
                marginTop: "5px",
                backgroundColor : ratingBgColor
              }}
            >
              {rating} &#9733;
            </Typography>
            <Typography align="left" component="p" fontSize={12} color={"gray"}>
              Reviews
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};
