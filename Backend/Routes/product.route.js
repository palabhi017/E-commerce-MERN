const {productModel} = require("../Model/product.model")
const express = require("express")
const jwt = require('jsonwebtoken');
const {authenticate} = require("../Middleware/auth.middleware")
const productRouter = express.Router()


productRouter.post("/add",async(req,res)=>{
    try {
      await productModel.insertMany(req.body)
      
      res.status(200).json({"msg":"post created successfully"})
    } catch (error) { 
      res.status(400).json({"err":"bad request"})
    }
 
  })
productRouter.get("/:id",async(req,res)=>{
    const id = req.params.id
    try {
        const product = await productModel.findById(id)
        res.send(product)
    } catch (error) {
        console.log(error)
        res.send("bad Request")
    }
})

  productRouter.get("/",async(req,res)=>{
    try {
        const q = {}
        const s ={}
        console.log(req.query)
        if(req.query.brand){
            q.brand= req.query.brand
        }
        if(req.query.gender){
            q.gender= req.query.gender
        }
        if(req.query.category){
            q.category = req.query.category
        }
        if(req.query.price){
            s.price = Number(req.query.price)
        }
       
        if(req.query.search){
            q.title = { $regex: req.query.search, $options: 'i' }
        }

    const products = await productModel.find(q).sort(s)
    
    res.status(200).send(products)
    
    
    } catch (error) {
        res.status(400).json({"err":"bad request"})
        
    }
   
})






productRouter.patch("/update/:id", async(req,res)=>{
    const id = req.params.id
    const data = req.body
try {
    const new_data = await productModel.findByIdAndUpdate({_id:id},data)
    res.status(200).json({"massage":"Data Updated successfully"})
} catch (error) {
    res.status(400).json({"err":"bad request"})
}
   
})

productRouter.delete("/delete/:id", async(req,res)=>{
    try {
        const id = req.params.id
        const new_data = await productModel.findByIdAndDelete({_id:id})
        res.status(200).json({"massage":"Data Deleted successfully"})
    } catch (error) {
         res.status(400).json({"err":"bad request"})  
    }

})

module.exports = {productRouter}