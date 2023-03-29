const mongoose = require("mongoose")


const productSchema = mongoose.Schema({
    image: String,
    title: String,
    price: Number,
    gender: String,
    category: String,
    brand: String
    
    
})

const productModel = mongoose.model("product",productSchema)

module.exports = {productModel}