import React from 'react'
import {Routes,Route} from "react-router-dom"
import Productpage from './Productpage'
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/product" element={<Productpage />} />
      <Route path="/admin" element={<AdminPanel />} />
     
     
    
     
      <Route path="/admin/edit" element={<EditRecord />} />

    </Routes>
  )
}
