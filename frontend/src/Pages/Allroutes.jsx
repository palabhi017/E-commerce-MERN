import React from 'react'
import {Routes,Route} from "react-router-dom"
import Productpage from './Productpage'
import Singleproductpage from './Singleproductpage'
const Allroutes = () => {
  return (
    <Routes>
          <Route path="/product" element={<Productpage/>}/>
          <Route path="/product/:id" element={<Singleproductpage/>} />
    </Routes>
  )
}

export default Allroutes