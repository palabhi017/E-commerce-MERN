import React from 'react'
import {Routes,Route} from "react-router-dom"
import Productpage from './Productpage'
const Allroutes = () => {
  return (
    <Routes>
          <Route path="/product" element={<Productpage/>}/>
    </Routes>
  )
}

export default Allroutes