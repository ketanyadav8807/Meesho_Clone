import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Grid,
  Box,
  Card,
  CardMedia,
  Typography,
  CardContent,
} from "@mui/material";

/**
 * 
  @param {string} ref - for refering the same item-> passed to product details
  @param {string} images - image url
  @param {string} title - title for the product 
  @param {string} originalPrice striked out original price
  @param {string} discountedPrice current payable price
  @param {string} rating rating from 0 to 5 (background changes color accourding to the rating)
  the free delivery is applicable if discountedPrice is greater than 300 
 * @returns single grid item to be placed under a grid container, requires above params
 */

export const SingleProduct = ({
  images,
  title,
  originalPrice,
  discountedPrice,
  rating,
  item,
}) => {
  let ratingBgColor = "green";
  const navigate = useNavigate();
  

  if (rating < 2) {
    ratingBgColor = "red";
  } else if (rating > 2 && rating < 3.5) {
    ratingBgColor = "orange";
  }

  return (
    
      <Grid
        item
        lg={3}
        md={6}
        xs={12}
        height="320px"
        onClick={() =>
          navigate(`${item.id}`,)
        }
        sx={{ marginBottom: "80px",cursor:"pointer" }}
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
                sx={{ marginRight: "5px", fontFamily: "Mier-Bold" }}
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
                {100 - Math.floor((discountedPrice / originalPrice) * 100)}% off
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingRight: "3px",
              }}
            >
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                color="greenT2"
                iconSize="20"
                style={{ paddingRight: "3px" }}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.833 5.733c0 .186 1.006 1.745 1.006 1.745.215.312-.844 2.27-.844 2.27-.105.151-.168 2.029-.168 2.029-.001.385-1.961 1.317-1.961 1.317-.17.058-1.276 1.54-1.276 1.54-.218.31-2.328-.139-2.328-.139-.17-.057-1.898.462-1.898.462-.352.118-1.806-1.541-1.806-1.541-.105-.151-1.796-.793-1.796-.793-.35-.12-.595-2.356-.595-2.356 0-.186-1.005-1.744-1.005-1.744-.215-.312.844-2.271.844-2.271.104-.151.167-2.029.167-2.029.002-.385 1.962-1.317 1.962-1.317.17-.058 1.275-1.54 1.275-1.54.218-.31 2.089.353 2.089.353.17.058 2.138-.676 2.138-.676l1.805 1.541c.106.151 1.797.793 1.797.793.35.12.594 2.356.594 2.356zM6.761 6.761a.875.875 0 11-1.238-1.237.875.875 0 011.238 1.237zm2.865-1.236a.6.6 0 11.848.849l-4.101 4.1a.6.6 0 11-.849-.848l4.102-4.1zm.846 4.95a.875.875 0 11-1.238-1.238.875.875 0 011.238 1.237z"
                  fill="#06A759"
                ></path>
              </svg>
              <Typography>Rs.100 off on 1st order</Typography>
            </Box>
            {discountedPrice > 300 ? (
              <Typography
                align="left"
                component="p"
                sx={{
                  padding: "1px 2px",
                  backgroundColor: "rgb(249, 249, 249)",
                  width: "fit-content",
                  fontSize: "14px",
                  borderRadius: "5px",
                }}
              >
                free Delivery
              </Typography>
            ) : (
              <Typography
                align="left"
                component="p"
                sx={{
                  padding: "1px 2px",
                  backgroundColor: "rgb(249, 249, 249)",
                  width: "fit-content",
                  fontSize: "14px",
                  borderRadius: "5px",
                }}
              >
                Delivery Rs.70
              </Typography>
            )}

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
                  marginRight: "3px",
                  backgroundColor: ratingBgColor,
                }}
              >
                {rating} &#9733;
              </Typography>
              <Typography
                align="left"
                component="p"
                fontSize={12}
                color={"gray"}
              >
                Reviews
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    
  );
};
