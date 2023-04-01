import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminPanel from "./AdminPanel";
import EditRecord from "./EditRecord";
import Productpage from "./Productpage";
import Cartpage from "./Cartpage";
import Payment from "./Payment";
import Loginpage from "./Loginpage";
import Signinpage from "./Signinpage";
import AdminLogin from "./AdminLogin";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/product" element={<Productpage />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/admin/edit" element={<EditRecord />} />
      <Route path="/cartpage" element={<Cartpage />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/Signin" element={<Signinpage />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
    </Routes>
  );
};

export default Allroutes;
