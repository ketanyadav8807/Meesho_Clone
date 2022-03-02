import React from "react";
import { useEffect, useState } from "react";

import {
  Button,
  Grid,
  Typography,
  IconButton,
  Pagination,
  PaginationItem,
} from "@mui/material";
import { SingleProduct } from "./SingleProduct";
import { Box } from "@mui/system";
export const Product = () => {
  const [data, setData] = useState([]);
  let begin = 0;
  let end = 5;
  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/shubham168/testing_json_server/products?_start=${begin}&_end=${end}`
    )
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        console.log(d);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Grid
        container
        spacing={2}
        rowSpacing={1}
        columnSpacing={2}
        //   bgcolor={"black"}
        width={"90vw"}
        sx={{
          justifyContent: "center",
          justifyItems: "center",
          margin: "auto",
          // height: "400px",
          padding: "0% 2%",
        }}
        p={1}
        
      >
        {data.map((item) => (
          <SingleProduct
            key={item.id}
            images={item.images[0]}
            title={item.title}
            originalPrice={item.original_price}
            discountedPrice={item.discounted_price}
            rating={item.rating}
          />
        ))}
      </Grid>
      <Box sx={{ display: "flex", margin: "auto", justifyContent: "center" }}>
        <Pagination
          count={10}
          color="primary"
          sx={{ textAlign: "center" }}
          hidePrevButton
          renderItem={(item) => (
            <PaginationItem
              variant="text"
              components={{ next: NextButton }}
              {...item}
            />
          )}
        />
      </Box>
    </>
  );
};

const NextButton = () => {
  return <Typography color="primary" sx={{ fontWeight: 700 }}>NEXT</Typography>;
};
