import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDec from "../components/pdp";
import HomePage from "../pages/home/home.page";
import OffersPage from "../pages/offers/offers.page";

function RootRouting() {
  return (
    <div>
      <Routes>
        <Route path="/product" Component={ProductDec} />
        <Route path="/" Component={HomePage} />
        <Route path="/offers" Component={OffersPage} />
      </Routes>
    </div>
  );
}

export default RootRouting;
