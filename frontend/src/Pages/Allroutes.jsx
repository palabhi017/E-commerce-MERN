import React from "react";
import { Routes, Route } from "react-router-dom";
import Cartpage from "./Cartpage";
import Productpage from "./Productpage";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/product" element={<Productpage />} />
      <Route path="/cart" element={<Cartpage />} />
    </Routes>
  );
};

export default Allroutes;
