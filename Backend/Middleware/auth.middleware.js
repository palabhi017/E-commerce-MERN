const jwt=require("jsonwebtoken")
const authenticate = (req,res,next)=>{
const token=req.headers.authorization
if(token){

const decoded=jwt.verify(token,"auth")
if(decoded){
console.log(decoded)
next()
} else {
res.send("Please Login")
}
} else {
res.send("Please do Login")
}
}
module.exports={
authenticate
}
