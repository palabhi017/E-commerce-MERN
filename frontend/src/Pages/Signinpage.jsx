import { Box, Button, Heading, Text, useToast } from "@chakra-ui/react";
import React from "react";
import {useFormik} from "formik"
import * as Yup from "yup"
import { useDispatch, useSelector } from "react-redux";
import {postUserData} from "../Redux/Auth/auth.action"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signinpage = () => {
const dispatch = useDispatch()
const toast = useToast()
const navigate = useNavigate()
const rag = useSelector((state)=> state.Auth.rag)


  const SignupSchema = Yup.object({
    first_name:Yup.string().min(2).required("Please Enter Your Name"),
    last_name:Yup.string().min(2).required("Please Enter Your Name"),
    email: Yup.string().email().required("Please Enter Your Email"),
    password: Yup.string().min(6).required("Please Enter Your Password"),
  });

  const {values,errors,touched,handleChange,handleSubmit} = useFormik({
    initialValues: {first_name:"",last_name:"",email:'',password:''},
    validationSchema: SignupSchema,
    onSubmit:(values)=>{
       handleSignup(values.first_name,values.last_name,values.email,values.password)
    }
  })

  const handleSignup =  async(first_name,last_name,email,password) => {
  try {
    const user = {
      name: first_name+" "+last_name,
      email,
      password,
     
    };
    let res = await axios.post(`http://localhost:8080/user/ragister`,user)
    //  dispatch(postUserData(user));
    if(res.data){
      if(res.data.msg===0){
        navigate("/login");
    toast({
      position: "top",
      title: "Please Login",
      description: "User already ragistered",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
      }else{
         navigate("/login");
    toast({
      position: "top",
      title: "Signup Successful",
      description: "You have successfully signup",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
      }
    }  
    
   
  } catch (error) {
    
  }
   
 
};

  return (
    <Box>
      <Box>
        <Heading
          style={{
            fontWeight: "400",
            fontSize: "2rem",
            lineHeight: "1.8rem",
            marginBottom: "20px",
          }}
        >
          Register
        </Heading>
        <Box display="flex" justifyContent="center">
          <Button
            type="link"
            style={{
              border: "none",
              cursor: "pointer",
              backgroundColor: "white",
              fontSize: "15px",
            }}
          >
            Home{" "}
          </Button>
          <p style={{ fontSize: "15px", marginTop: "9px" }}>
            <span>&#62;</span> Account
          </p>
        </Box>{" "}
      </Box>
      <Box
        style={{
          padding: "10px",
          textAlign: "left",
          width: "23%",
          margin: "auto",
        }}
      >
        <Heading
          style={{
            fontWeight: "500",
            fontSize: "1.4rem",
            lineHeight: "1.8rem",
            marginBottom: "10px",
          }}
        >
          Register
        </Heading>
        <input
          style={{
            borderRadius: ".25rem",
            borderWidth: "1px",
            lineHeight: "1.8rem",
            padding: ".375rem .75rem",
            width: "100%",
            marginBottom: "10px",
            boxSizing: "border-box",
          }}
          type="text"
          placeholder="First Name"
          name="first_name"
          value={values.first_name}
          onChange={handleChange}
        />
        {errors.first_name && touched.first_name &&  <Text textAlign={"left"} fontSize={"14px"} color="red">{errors.first_name}</Text>} 
        <input
          style={{
            borderRadius: ".25rem",
            borderWidth: "1px",
            boxSizing: "border-box",
            lineHeight: "1.8rem",
            padding: ".375rem .75rem",
            width: "100%",
            marginBottom: "10px",
          }}
          type="text"
          placeholder="Last Name"
          name="last_name"
          value={values.last_name}
          onChange={handleChange}
        />
        {errors.last_name && touched.last_name &&  <Text textAlign={"left"} fontSize={"14px"} color="red">{errors.last_name}</Text>} 
        <input
          style={{
            borderRadius: ".25rem",
            boxSizing: "border-box",
            borderWidth: "1px",
            lineHeight: "1.8rem",
            padding: ".375rem .75rem",
            width: "100%",
            marginBottom: "10px",
          }}
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && touched.email &&  <Text textAlign={"left"} fontSize={"14px"} color="red">{errors.email}</Text>} 
        <input
          style={{
            borderRadius: ".25rem",
            boxSizing: "border-box",
            borderWidth: "1px",
            lineHeight: "1.8rem",
            padding: ".375rem .75rem",
            width: "100%",
            marginBottom: "10px",
          }}
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && touched.password &&  <Text textAlign={"left"} fontSize={"14px"} color="red">{errors.password}</Text>} 
        <p style={{ fontSize: "13px", color: "grey", marginBottom: "10px" }}>
          Sign up for early Sale access plus tailored new arrivals, trends and
          promotions. To opt out, click unsubscribe in our emails.
        </p>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            width: "100%",
            marginBottom: "10px",
          }}
          type="submit"
          onClick={handleSubmit}
        >
          Register
        </button>
        <button
          style={{
            width: "100%",
            padding: "13px 20px",
            marginBottom: "10px",
            borderRadius: "8px",
            border: "1px solid",
          }}
        >
          Log In
        </button>
        <button
          style={{
            backgroundColor: "#4267B2",
            color: "white",
            padding: "13px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            width: "100%",
            border: "none",
            marginBottom: "10px",
          }}
        >
          Sign in with Facebook
        </button>
        <button
          style={{
            backgroundColor: "#DB4437",
            color: "white",
            padding: "13px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            width: "100%",
            border: "none",
          }}
        >
          Sign in with Google
        </button>
      </Box>
    </Box>
  );
};

export default Signinpage;
