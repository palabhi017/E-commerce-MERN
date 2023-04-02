const mongoose = require("mongoose")


const orderSchema = mongoose.Schema({
    image: String,
    title: String,
    price: Number,
    gender: String,
    category: String,
    brand: String,
    quantity:Number,
    userID:String
})

const orderModel = mongoose.model("orderItem",orderSchema)

module.exports = {orderModel}