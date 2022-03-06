import React from "react";
import { Product } from "./Components/PageProducts/Product";
import { ProductDetail } from "./Components/productDetails/ProductDetail";
import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";

export const RouterPage = (props) => {
  return (
    <>
      {props.children}
      <Outlet />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path=":id"
          element={
            <ProductDetail fetchURL={"https://meesho-db.herokuapp.com/Men/"} />
          }
        />
        <Route
          path="/Men"
          element={<Product fetchURL={"https://meesho-db.herokuapp.com/Men"} />}
        />
        <Route
          path="/Men/:id"
          element={
            <ProductDetail fetchURL={"https://meesho-db.herokuapp.com/Men/"} />
          }
        />
        <Route
          path="/Women_Ethnic"
          element={
            <Product
              fetchURL={"https://meesho-db.herokuapp.com/Women_Ethnic"}
            />
          }
        />
        <Route
          path="/Women_Ethnic/:id"
          element={
            <ProductDetail
              fetchURL={"https://meesho-db.herokuapp.com/Women_Ethnic/"}
            />
          }
        />

        <Route
          path="/Women_Western"
          element={
            <Product
              fetchURL={"https://meesho-db.herokuapp.com/Women_Western"}
            />
          }
        />
        <Route
          path="/Women_Western/:id"
          element={
            <ProductDetail
              fetchURL={"https://meesho-db.herokuapp.com/Women_Western/"}
            />
          }
        />
        <Route
          path="/Jewellery"
          element={
            <Product fetchURL={"https://meesho-db.herokuapp.com/Jewellery"} />
          }
        />
        <Route
          path="/Jewellery/:id"
          element={
            <ProductDetail
              fetchURL={"https://meesho-db.herokuapp.com/Jewellery/"}
            />
          }
        />
        <Route
          path="/Beauty_Products"
          element={
            <Product
              fetchURL={"https://meesho-db.herokuapp.com/Beauty_Products"}
            />
          }
        />
        <Route
          path="/Beauty_Products/:id"
          element={
            <ProductDetail
              fetchURL={"https://meesho-db.herokuapp.com/Beauty_Products/"}
            />
          }
        />
        <Route
          path="/Bags_Footwear"
          element={
            <Product
              fetchURL={"https://meesho-db.herokuapp.com/Bags_Footwear"}
            />
          }
        />
        <Route
          path="/Bags_Footwear/:id"
          element={
            <ProductDetail
              fetchURL={"https://meesho-db.herokuapp.com/Bags_Footwear/"}
            />
          }
        />
        <Route
          path="/Home_Kitchen"
          element={
            <Product
              fetchURL={"https://meesho-db.herokuapp.com/Home_Kitchen"}
            />
          }
        />
        <Route
          path="/Home_Kitchen/:id"
          element={
            <ProductDetail
              fetchURL={"https://meesho-db.herokuapp.com/Home_Kitchen/"}
            />
          }
        />
        <Route
          path="/Kids"
          element={
            <Product fetchURL={"https://meesho-db.herokuapp.com/Kids"} />
          }
        />
        <Route
          path="/Kids/:id"
          element={
            <ProductDetail fetchURL={"https://meesho-db.herokuapp.com/Kids/"} />
          }
        />
        <Route
          path="/Electronics"
          element={
            <Product fetchURL={"https://meesho-db.herokuapp.com/Electronics"} />
          }
        />
        <Route
          path="/Electronics/:id"
          element={
            <ProductDetail
              fetchURL={"https://meesho-db.herokuapp.com/Electronics/"}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
