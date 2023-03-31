const {userModel} = require("../Model/Auth.model")
const express = require("express")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userRouter = express.Router()

userRouter.post("/ragister", async(req,res)=>{
  const {name,email,password}=req.body
  
  
      const user=await userModel.find({email})
      if(user.length>0){
        res.send("User already exist, please login")
      }else{
        bcrypt.hash(password, 5, async (err, hash)=>{
          const user=new userModel({name,email,password:hash})
          await user.save()
        
      res.status(200).json({"massage":"registered successfully"})
        })
      }
     

})

userRouter.post("/login",async(req,res)=>{ 
  const {email,password}=req.body
  try{
  const user=await userModel.find({email})
  if(user.length>0){
  bcrypt.compare(password, user[0].password, function(err, result) {
  if(result){
  const token = jwt.sign({ shop: 'fashion' }, 'auth');
  res.send({"msg":"Login Successfull","token":token})
  } else {res.send("Wrong Credntials")}
  });
  } else {
  res.send("Wrong Credntials")
  }
  } catch(err){
  res.send("Something went wrong")
  console.log(err)
  }
   
  })
  
  module.exports = {userRouter}