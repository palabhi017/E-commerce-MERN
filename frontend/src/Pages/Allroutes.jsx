import React from 'react'
import {Routes,Route} from "react-router-dom"
import Productpage from './Productpage'
import AdminPanel from "./AdminPanel"
import EditRecord from "./EditRecord"
import Loginpage from "./Loginpage"
import Signinpage from './Signinpage'
import HomePage from './Homepage'

const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<Productpage />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/admin/edit" element={<EditRecord />} />
      <Route path="/login" element={<Loginpage/>}/>
      <Route path="/Signin" element={<Signinpage/>}/>
    </Routes>
     
    
     

  )
}

export default Allroutes;