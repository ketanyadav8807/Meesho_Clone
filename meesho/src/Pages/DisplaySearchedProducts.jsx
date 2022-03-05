import React, { useEffect, useState } from "react";
import { SingleProduct } from "../Components/PageProducts/SingleProduct";
import { useLocation } from "react-router-dom";
export const DisplaySearchedProducts = () => {
  let [data, setData] = useState("<></>");
  const { state } = useLocation();
  console.log(state);
  useEffect(() => {
    let display = state.map((products) =>
      products.map((item) => (
        <SingleProduct
          item={item}
          key={item.id}
          images={item.images[0]}
          title={item.title}
          originalPrice={item.original_price}
          discountedPrice={item.discounted_price}
          rating={item.rating}
        />
      ))
    );
    console.log(display);
    setData(display);
  }, [state]);

  return <div style={{ display: "flex", flexWrap: "wrap" }}>{data}</div>;
};
