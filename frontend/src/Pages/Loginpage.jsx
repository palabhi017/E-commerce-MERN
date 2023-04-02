import { Box, Button, Heading, Input, SimpleGrid, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useFormik } from 'formik'
import * as Yup from "yup";
import {useNavigate} from "react-router-dom"
import { AUTH_SUCCESS } from "../Redux/Auth/auth.types";
import {useDispatch} from "react-redux"

const Loginpage = () => {
const toast = useToast()
const navigate = useNavigate()
const [load,setLoad] = useState(false)
const dispatch = useDispatch()


  const LoginSchema = Yup.object({
    email: Yup.string().email().required("Please Enter Your Email"),
    password: Yup.string().min(6).required("Please Enter Your Password"),
  });

  const {values,errors,touched,handleChange,handleSubmit}=useFormik({
    initialValues: {email:"",password:""},
    validationSchema:LoginSchema,
    onSubmit:(values,action)=>{
          handleLogin(values.email,values.password)
          // action.resetForm();
        }
  })

  const handleLogin= async(email,password)=>{
   setLoad(true)
    try {
      setLoad(false)
        let res = await axios.post(`http://localhost:8080/user/login`,{email,password})
      
        if(res.data.token){
          
          localStorage.setItem("user", JSON.stringify(res.data.user));
          localStorage.setItem("token", JSON.stringify(res.data.token));
          dispatch({ type: AUTH_SUCCESS, payload: res.data.user })
          navigate("/")
          toast({
            position: "top",
            title: "Login Success",
            description: "you are loged in successfully",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
        }else if(res.data.res){
          toast({
            position: "top",
            title: "Login Failed",
            description: "Your email or password incorrect",
            status: "error",
            duration: 4000,
            isClosable: true,
          });
        }


    } catch (error) {
      setLoad(false)
        return error;
    }
}

  return (
    <Box p="40px">
      <Box marginBottom={"30px"} >
        <Heading
          fontWeight="400"
          fontSize="2rem"
          lineHeight="1.8rem"
          marginBottom={"20px"}
        >
          Log In
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
      <SimpleGrid
        columns={{ base: "2", sm: "1", xl: "2" }}
        width="50%"
        margin="auto"
        gap="40px"
      >
        <Box style={{ textAlign: "left", padding: "10px" }}>
          <Heading
            fontWeight="500"
            fontSize="1.4rem"
            lineHeight="1.8rem"
            marginBottom={"10px"}
          >
            Log In
          </Heading>
          <Input
            borderRadius=".25rem"
            borderWidth="1px"
            lineHeight="1.8rem"
            padding=".375rem .75rem"
            width="100%"
            marginBottom="10px"
            type={"email"}
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
        {errors.email && touched.email &&  <Text textAlign={"left"} fontSize={"14px"} color="red">{errors.email}</Text>} 

          <Input
            borderRadius=".25rem"
            borderWidth="1px"
            lineHeight="1.8rem"
            padding=".380rem .75rem"
            width="100%"
            marginBottom="10px"
            type={"password"}
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
        {errors.password && touched.password &&  <Text textAlign={"left"} fontSize={"14px"} color="red">{errors.password}</Text>} 

          <a
            style={{ cursor: "pointer", borderBottom: "1px solid" }}
           href="#"
          >
            Forgot your password?
          </a>
          <Button
            style={{
              backgroundColor: "black",
              marginTop: "15px",
              color: "white",
              padding: "13px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              width: "97%",
              marginBottom: "10px",
              border: "none",
            }}
            isLoading={load? true:false}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Button
            style={{
              backgroundColor: "#4267B2",
              color: "white",
              padding: "13px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              width: "97%",
              border: "none",
              marginBottom: "10px",
            }}
          >
            Sign in with Facebook
          </Button>
          <Button
            style={{
              backgroundColor: "#DB4437",
              color: "white",
              padding: "13px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              width: "97%",
              border: "none",
            }}
          >
            Sign in with Google
          </Button>
        </Box>
        <Box style={{ textAlign: "left", padding: "10px" }}>
          <Heading
            style={{
              fontWeight: "500",
              fontSize: "1.4rem",
              lineHeight: "1.8rem",
              marginBottom: "10px",
            }}
          >
            New Customer
          </Heading>
          <p
            style={{
              marginBottom: "1.5rem",
              lineHeight: "28px",
              color: "grey",
              fontSize: ".95rem",
            }}
          >
            Sign up for early Sale access plus tailored new arrivals, trends and
            promotions. To opt out, click unsubscribe in our emails.
          </p>
          <Button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Register
          </Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Loginpage;
