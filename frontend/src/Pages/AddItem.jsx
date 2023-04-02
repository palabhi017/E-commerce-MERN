import { Box, Button, Flex, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddItem = () => {
    const toast = useToast()
const navigate = useNavigate()
    const {values,handleChange,handleSubmit}=useFormik({
        initialValues: {image:"",title:"",gender:"men",brand:"",category:"",price:0},
        
        onSubmit:(values,action)=>{
              handleAdd(values)
              // action.resetForm();
            }
      })


      const handleAdd = async(item)=>{
        try {
          await axios.post(`http://localhost:8080/product/add`,item)
        
          toast({
            position: "top",
            title: "Item Added",
            description: "Item added successfully.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
         navigate("/admin")
        } catch (error) {
         console.log(error) 
        }
        }
  return (
    <Box w="40%" m="auto" mt="80px" mb="80px">
    <FormControl>
        
        <Flex gap={3}>
          <Flex mb={6} w={"39%"} flexDirection={"column"}>
            <FormLabel>Title</FormLabel>
            <Input
              name="title"
              value={values.title}
              onChange={handleChange}
              ></Input>
          </Flex>
          <Flex w={"39%"} flexDirection={"column"}>
            <FormLabel>Brand</FormLabel>
            <Input
             name="brand"
             value={values.brand}
             onChange={handleChange}
            ></Input>
          </Flex>
          <Flex w={"22%"} flexDirection={"column"}>
            <FormLabel>Price</FormLabel>
            <Input
             name="price"
             value={values.price}
             onChange={handleChange}
              type="number"></Input>
          </Flex>
        </Flex>
        <Flex gap={3}>
          <Flex w={"20%"} flexDirection={"column"}>
            <FormLabel>Category</FormLabel>
            <Input 
            name="category"
            value={values.category}
            onChange={handleChange}
            ></Input>
          </Flex>
          <Flex w={"80%"} flexDirection={"column"}>
            <FormLabel>Image</FormLabel>
            <Input
              name="image"
              value={values.image}
              onChange={handleChange}
              ></Input>
          </Flex>
        </Flex>
       <Button
          onClick={handleSubmit}
          bgColor={"#A6E3E9"}
          w={"100%"}
          mt={8}>
          ADD PRODUCT
        </Button>
      </FormControl>
    </Box>
  )
}

export default AddItem