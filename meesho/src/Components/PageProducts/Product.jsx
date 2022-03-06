import React, { useContext } from "react";
import { useEffect, useState } from "react";

import {
  Button,
  Grid,
  Pagination,
  PaginationItem,
  Skeleton,
} from "@mui/material";
import { SingleProduct } from "./SingleProduct";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import { CartContext } from "../../Contexts/CartProvider";

/**
 * @param {string} fetchURL url from where data is to be fetched and displayed
 * @returns JSX Element Products by fetching the db.json, working pagination
 */

export const Product = ({ fetchURL }) => {
  const { getCount } = useContext(CartContext);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [begin, setBegin] = useState(0);
  const [end, setEnd] = useState(8);
  const [total, setTotal] = useState(0);
  const location = useLocation().pathname.slice(1);
  const title = location.replace("_", " ");
  getCount();
  useEffect(() => {
    setTotal(0);
    setBegin(0);
    setEnd(8);
    fetch(`${fetchURL}`)
      .then((res) => res.json())
      .then((d) => {
        setIsDataLoading(false);
        setTotal(d.length);
      })
      .catch((err) => {
        console.log(err);
        setIsDataLoading(false);
      });
      console.log(end);
  }, [fetchURL]);
  document.title = title;
  const NextButton = () => {
    document.documentElement.scrollTop = 0;
    return end >= total ? (
      <></>
    ) : (
      <Button color="primary" sx={{ fontWeight: 700 }} onClick={() => next()}>
        NEXT
      </Button>
    );
  };

  const PrevButton = () => {
    return begin >= 8 ? (
      <Button color="primary" sx={{ fontWeight: 700 }} onClick={() => prev()}>
        PREVIOUS
      </Button>
    ) : (
      <></>
    );
  };
  useEffect(() => {
    setIsDataLoading(true);
    fetch(`${fetchURL}?_start=${begin}&_end=${end}`)
      .then((res) => res.json())
      .then((d) => {
        setIsDataLoading(false);
        setData(d);
      })
      .catch((err) => {
        console.log(err);
        setIsDataLoading(false);
      });
      console.log(end);
  }, [begin, end, fetchURL]);

  const next = () => {
    if(total >= 8){
      setBegin((prev) => prev + 8);
      setEnd((prev) => prev + 8);
    }
    else{
      setBegin((prev) => prev + total);
    setEnd((prev) => prev + total);
    }
    
  };
  const prev = () => {
    if (begin >= 8) {
      setBegin((prev) => prev - 8);
      setEnd((prev) => prev - 8);
    }
  };
  
  return (
    <>
      {!isDataLoading ? (
        <div style={{ margin: "1% 1%" }}>
          <h2>{title}</h2>

          <p style={{ marginTop: "1%", fontSize: "16px" }}>
            <span style={{ fontWeight: "600" }}>
              Showing {begin}-{end}
            </span>{" "}
            of {total} Products
          </p>
        </div>
      ) : (
        <>
          <Skeleton width="13%" height="64px" />
          <Skeleton width="10%" height="30px" />
        </>
      )}
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
        {!isDataLoading ? (
          data.map((item) => (
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
          ))
        ) : (
          <>
            <Grid item lg={3} md={6} xs={12}>
              <Skeleton height="500px" sx={{ margin: "-32% 0%" }} />
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              <Skeleton height="500px" sx={{ margin: "-32% 0%" }} />
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              <Skeleton height="500px" sx={{ margin: "-32% 0%" }} />
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              <Skeleton height="500px" sx={{ margin: "-32% 0%" }} />
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              <Skeleton height="500px" sx={{ margin: "-32% 0%" }} />
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              <Skeleton height="500px" sx={{ margin: "-32% 0%" }} />
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              <Skeleton height="500px" sx={{ margin: "-32% 0%" }} />
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              <Skeleton height="500px" sx={{ margin: "-32% 0%" }} />
            </Grid>
          </>
        )}
      </Grid>
      <Box
        sx={{ display: "flex", margin: "4% auto", justifyContent: "center" }}
      >
        <Pagination
          count={Math.ceil(total / 8)}
          color="primary"
          sx={{ textAlign: "center" }}
          onChange={({ event, value }) => setPage(value)}
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
