const {cartModel} = require("../Model/cart.model")
const express = require("express")
const jwt = require('jsonwebtoken');
const {authenticate} = require("../Middleware/auth.middleware")
const cartRouter = express.Router()


cartRouter.get("/",authenticate,async(req,res)=>{
    try {
    
    // const products = await productModel.find(q)
    res.send("hi")
    // res.status(200).json()
    
    
    } catch (error) {
        res.status(400).json({"err":"bad request"})
        
    }
   
})

module.exports = {cartRouter}