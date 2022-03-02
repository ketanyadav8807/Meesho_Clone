import React, { useState, useEffect } from "react";
import { Box, Button, Grid } from "@mui/material";
import { CartIcon } from "../../Icon/CartIcon";

export const ProductDetail = ({ refItem, fetchURL }) => {
  const [data, setData] = useState({});
  const [img, setImg] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    fetch(`${fetchURL}/1`)
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

  return (
    <>
      <Grid container>
        <Grid
          xs={2}
          Item
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {img.map((imgUrl) => (
            <img
              src={imgUrl}
              width="45px"
              onClick={(e) => changeSelectedImg(e.currentTarget.src)}
            />
          ))}
        </Grid>
        <Box sx={{ display: "flex", flexDirection: "column", width: "400px" }}>
          <Grid item>
            <img src={selected} height="470px" />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{ textTransform: "capitalize", fontSize: "20px" }}
            >
              <CartIcon />
              Add to Cart
            </Button>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};
