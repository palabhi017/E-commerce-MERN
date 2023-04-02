const {cartModel} = require("../Model/cart.Model")
const express = require("express")
const jwt = require('jsonwebtoken');
const {authenticate} = require("../Middleware/auth.middleware")
const cartRouter = express.Router()


cartRouter.get("/:id",async(req,res)=>{
    try {
     const id = req.params.id
        const product = await cartModel.find({userID:id})
    res.send(product)

} catch (error) {
        res.status(400).json({"err":"bad request"})
        
    }
   
})

cartRouter.post("/add",async(req,res)=>{
    const item = req.body
    try {
       await cartModel.insertMany(item)

    res.send("Item added successfully")

} catch (error) {
        res.status(400).json({"err":"bad request"})
        
    }
   
})

cartRouter.patch("/update/:id", async(req,res)=>{
    const id = req.params.id
    const data = req.body
try {
    const new_data = await cartModel.findByIdAndUpdate({_id:id},data)
    res.status(200).json({"massage":"Data Updated successfully"})
} catch (error) {
    res.status(400).json({"err":"bad request"})
}
   
})

cartRouter.delete("/delete/:id", async(req,res)=>{
    try {
        const id = req.params.id
        const new_data = await cartModel.findByIdAndDelete({_id:id})
        res.status(200).json({"massage":"Data Deleted successfully"})
    } catch (error) {
         res.status(400).json({"err":"bad request"})  
    }

})

cartRouter.delete("/deleteall/:id", async(req,res)=>{
    try {
        const id = req.params.id
        const new_data = await cartModel.deleteMany({userID:id})
        res.status(200).json({"massage":"Data Deleted successfully"})
    } catch (error) {
         res.status(400).json({"err":"bad request"})  
    }

})



module.exports = {cartRouter}