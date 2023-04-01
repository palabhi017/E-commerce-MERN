import React from 'react'
import {Routes,Route} from "react-router-dom"
import AdminLogin from "./AdminLogin";
import Productpage from './Productpage'
import AdminPanel from "./AdminPanel"
import EditRecord from "./EditRecord"
import Loginpage from "./Loginpage"
import Signinpage from './Signinpage'
import Singleproductpage from './Singleproductpage'
import Cartpage from "../Pages/Cartpage"
import Payment from "./Payment"
import HomePage from './Homepage'
import PrivateRoute from './PrivateRoute'

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<Productpage />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/admin/edit" element={<EditRecord />} />
      <Route path="/cartpage" element={<PrivateRoute><Cartpage /></PrivateRoute>} />
      <Route path="/payment" element={<PrivateRoute><Payment /></PrivateRoute>} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/login" element={<Loginpage/>}/>
      <Route path="/Signin" element={<Signinpage/>}/>
      <Route path="/product/:id" element={<Singleproductpage/>}/>      
    </Routes>
  );
};

export default Allroutes;
