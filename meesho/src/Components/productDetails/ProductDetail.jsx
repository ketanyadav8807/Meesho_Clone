import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { CartIcon } from "../../Icon/CartIcon";

export const ProductDetail = ({ refItem, fetchURL }) => {
  const [data, setData] = useState({});
  const [img, setImg] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    fetch(`${fetchURL}/2  `)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setImg(d.images);
        setSelected(d.images[0]);
        console.log(d);
      })
      .catch((err) => console.log(err));
  }, []);

  const changeSelectedImg = (imgUrl) => {
    setSelected(imgUrl);
  };

  let ratingBgColor = "green";

  if (data.rating < 2) {
    ratingBgColor = "red";
  } else if (data.rating > 2 && data.rating < 3.5) {
    ratingBgColor = "orange";
  }

  return (
    <>
      <Grid container columns={12} width={"80%"} marginLeft="10%" my={-5}>
        <Grid md={2} Item style={{display: "flex",flexDirection: "column", order:{ sm: 2, lg: 1 } }} >
          {img.map((imgUrl) => (
            <img
              src={imgUrl}
              width="45px"
              onClick={(e) => changeSelectedImg(e.currentTarget.src)}
            />
          ))}
        </Grid>
        <Grid sx={{ display: "flex", flexDirection: "column", width: "400px",order:{ sm: 1, lg: 2 } }} md={4}  >
          <Grid
            item
            
            my={2}
            borderBottom="1px solid rgba(0, 0, 0, 0.2) "
            sx={{
              maxWidth: "400px",
              border: "1px solid rgb(240, 240, 240)",
              borderRadius: "8px",
              boxShadow: "none",
              boxSizing: "border-box",
            }}
          >
            <img
              src={selected}
              style={{
                objectFit: "contain",
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
              }}
            />
          </Grid>
          <Grid item py={2} borderBottom="1px solid rgba(0, 0, 0, 0.2)">
            <Button
              variant="contained"
              sx={{
                width: "100%",
                textTransform: "capitalize",
                fontSize: "20px",
                ":hover": { backgroundColor: "rgb(244, 51, 151)" },
              }}
              disableRipple
              disableElevation
            >
              <CartIcon />
              Add to Cart
            </Button>
          </Grid>
        </Grid>

        <Grid item md={5} sx={{ marginLeft: "5%", order:{ sm: 3, lg: 3 } }}>
          <Card
            sx={{
              marginBottom: "4%",
              border: "1px solid rgb(240, 240, 240)",
              borderRadius: "8px",
              boxShadow: "none",
            }}
          >
            <CardContent sx={{ fontSize: "25px" }}>
              <Typography
                component="div"
                color="gray"
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontSize: "20px",
                  marginBottom: "1%",
                }}
              >
                {data.title}
              </Typography>
              <Grid
                sx={{
                  display: "flex",
                  alignContent: "flex-start",
                  alignItems: "center",
                  marginBottom: "1%",
                }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  color="gray"
                  align="left"
                  color="black"
                  component="p"
                  sx={{ marginRight: "15px", fontFamily: "Mier-Bold" }}
                >
                  Rs.{data.discounted_price}
                </Typography>
                <Typography
                  color="gray"
                  align="left"
                  component="p"
                  fontSize={18}
                  sx={{ marginRight: "15px", textDecoration: "line-through" }}
                >
                  Rs.{data.original_price}
                </Typography>
                <Typography
                  color="green"
                  align="left"
                  component="p"
                  sx={{ fontSize: "20px", marginBottom: "1%" }}
                >
                  {100 -
                    Math.floor(
                      (data.discounted_price / data.original_price) * 100
                    )}
                  % off
                </Typography>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingRight: "3px",
                  marginBottom: "2%",
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
                <Typography fontSize={"18px"}>
                  Rs.100 off on 1st order
                </Typography>
              </Grid>
              {data.discountedPrice > 300 ? (
                <Typography
                  align="left"
                  component="p"
                  sx={{
                    padding: "1px 2px",
                    backgroundColor: "rgb(249, 249, 249)",
                    width: "fit-content",
                    fontSize: "20px",
                    borderRadius: "5px",
                    marginBottom: "1%",
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
                    marginBottom: "1%",
                  }}
                >
                  Delivery Rs.70
                </Typography>
              )}

              <Grid
                sx={{
                  display: "flex",
                  alignContent: "flex-start",
                  fontSize: "14px",
                  alignItems: "center",
                  marginBottom: "1%",
                }}
              >
                <Typography
                  color="white"
                  align="left"
                  component="p"
                  sx={{
                    padding: "5px 10px",
                    width: "fit-content",
                    fontSize: "18px",
                    borderRadius: "40px",
                    border: "1px solid rgb(249, 249, 249)",
                    marginTop: "5px",
                    marginRight: "8px",

                    backgroundColor: ratingBgColor,
                  }}
                >
                  {data.rating} &#9733;
                </Typography>
                <Typography
                  align="left"
                  component="p"
                  fontSize={18}
                  color={"gray"}
                >
                  Reviews
                </Typography>
              </Grid>
            </CardContent>
          </Card>

          <Card
            sx={{
              marginBottom: "4%",
              border: "1px solid rgb(240, 240, 240)",
              borderRadius: "8px",
              boxShadow: "none",
            }}
          >
            <CardContent>
              <Typography fontWeight={700} fontSize={24}>
                Select Size
              </Typography>
            </CardContent>
            <CardContent>
              <Button
                variant="outlined"
                dissableRipple
                sx={{
                  backgroundColor: "rgba(244, 51, 151,0.2)",
                  color: "rgb(244, 51, 151)",

                  borderRadius: "40px",
                  marginBottom: "2%",
                  fontSize: "14px",
                  fontWeight: "500",
                  ":hover": {
                    backgroundColor: "rgba(244, 51, 151,0.2)",
                    color: "rgb(244, 51, 151)",
                  },
                }}
                disableRipple
                disableElevation
              >
                {data.sizes}
              </Button>
            </CardContent>
          </Card>

          <Card
            sx={{
              marginBottom: "4%",
              border: "1px solid rgb(240, 240, 240)",
              borderRadius: "8px",
              boxShadow: "none",
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight={700} marginBottom="1%">
                Product Details
              </Typography>
              <Typography color="gray" fontSize="18px">
                Name: {data.title}
              </Typography>
              <Typography color="gray" fontSize="18px">
                Fabric: {data.details && data.details.Fabric}
              </Typography>
              <Typography color="gray" fontSize="18px">
                Multipack: {data.details && data.details.Multipack}
              </Typography>
              <Typography color="gray" fontSize="18px">
                Pattern: {data.details && data.details.Pattern}
              </Typography>
              <Typography color="gray" fontSize="18px">
                Description: {data.details && data.details.Description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};