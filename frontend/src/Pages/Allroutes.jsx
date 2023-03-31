import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminPanel from "./AdminPanel";
import EditRecord from "./EditRecord";
import Productpage from "./Productpage";
import Cartpage from "./Cartpage";
import Payment from "./Payment";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/product" element={<Productpage />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/admin/edit" element={<EditRecord />} />
      <Route path="/cartpage" element={<Cartpage />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
};

export default Allroutes;
