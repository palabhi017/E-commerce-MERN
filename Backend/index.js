const express = require("express")
const {connection} = require("./db")
require("dotenv").config()
const cors = require("cors")
const app = express()
const {userRouter}  = require("./Routes/Auth.route")
const {productRouter} =  require("./Routes/product.route")
const {cartRouter} =  require("./Routes/cart.route")
const {orderRouter} =  require("./Routes/order.route")

app.use(cors())
app.use(express.json())
app.use("/user",userRouter)
app.use("/product",productRouter)
app.use("/cart",cartRouter)
app.use("/order",orderRouter)




app.listen(process.env.port,async()=>{
try {
    await connection
    console.log("port is running")
} catch (error) {
    console.log(error)
} 
})