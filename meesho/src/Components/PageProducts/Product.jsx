import React, { useContext } from "react";
import { useEffect, useState } from "react";

import { Button, Grid, Pagination, PaginationItem } from "@mui/material";
import { SingleProduct } from "./SingleProduct";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import { CartContext } from "../../Contexts/CartProvider";

/**
 * @param {string} fetchURL url from where data is to be fetched and displayed
 * @returns JSX Element Products by fetching the db.json, working pagination
 */

export const Product = ({ fetchURL }) => {
  const {getCount} = useContext(CartContext)
  const [page, setPage] = useState(1)
  const [data, setData] = useState([]);
  const [begin, setBegin] = useState(0);
  const [end, setEnd] = useState(5);
  const [total, setTotal] = useState(0);
  const location = useLocation().pathname.slice(1);
  const title = location.replace("_", " ");
  getCount()
  document.title = title;
  const NextButton = () => {
    return (
      <Button color="primary" sx={{ fontWeight: 700 }} onClick={() => next()}>
        NEXT
      </Button>
    );
  };

  const PrevButton = () => {
    return begin >= 5 ? (
      <Button color="primary" sx={{ fontWeight: 700 }} onClick={() => prev()}>
        PREVIOUS
      </Button>
    ) : (
      <></>
    );
  };
  useEffect(() => {
    fetch(`${fetchURL}`)
      .then((res) => res.json())
      .then((data) => setTotal(data.length))
      .catch(console.log);
  }, []);
  useEffect(() => {
    fetch(`${fetchURL}?_start=${begin}&_end=${end}`)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      })
      .catch((err) => console.log(err));
  }, [begin, end, fetchURL]);

  const next = () => {
    setBegin((prev) => prev + 5);
    setEnd((prev) => prev + 5);
  };
  const prev = () => {
    if (begin >= 5) {
      setBegin((prev) => prev - 5);
      setEnd((prev) => prev - 5);
    }
  };
  return (
    <>
      <div style={{ margin: "1% 1%" }}>
        <h2>{title}</h2>

        <p style={{ marginTop: "1%", fontSize: "16px" }}>
          <span style={{ fontWeight: "600" }}>Showing {begin}-{end}</span> of {total} Products
        </p>
      </div>
      <Grid
        container
        lg={12}
        md={12}
        spacing={2}
        rowSpacing={"20px"}
        columnSpacing={2}
        width={"100%"}
        marginTop={"52px"}
        sx={{
          rowGap: "20px",
          justifyContent: "center",
          justifyItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          // height: "400px",
          // padding: "0% 2%",
        }}
        p={1}
      >
        {data.map((item) => (
          <SingleProduct
            item={item}
            key={item.id}
            images={item.images[0]}
            title={item.title}
            originalPrice={item.original_price}
            discountedPrice={item.discounted_price}
            rating={item.rating}
            onClickNext={next}
            onClickPrev={prev}
          />
        ))}
      </Grid>
      <Box
        sx={{ display: "flex", margin: "4% auto", justifyContent: "center" }}
      >
        <Pagination
          count={Math.round(total / 5)}
          color="primary"
          sx={{ textAlign: "center" }}
          onChange={({event, value}) => setPage(value)}
          // hidePrevButton

          renderItem={(item) => (
            <PaginationItem
              variant="text"
              components={{ previous: PrevButton, next: NextButton }}
              {...item}
            />
          )}
        />
      </Box>
    </>
  );
};
