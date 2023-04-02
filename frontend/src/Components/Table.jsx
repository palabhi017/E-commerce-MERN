import { Tr, Td, Button, Image, ModalFooter, Input, FormLabel, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, useDisclosure } from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function ProductTable({ objProp, funcProp, funcedit }) {
 const {_id,image,title,category,brand,price,gender} = objProp;
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)

  const {values,handleChange,handleSubmit}=useFormik({
    initialValues: {image:image,title:title,gender:gender,brand:brand,category:category,price:price},
    
    onSubmit:(values,action)=>{
          funcedit(_id,values)
       
        }
  })

  

  
  return (
    <>
      <Tr>
        <Td>
          <Image w={"100px"} src={image} />
        </Td>
        <Td>{title}</Td>
        <Td>{brand}</Td>
        <Td>{gender}</Td>
        <Td>{category}</Td>
        <Td>₹{price}</Td>
        <Td>
          <Button onClick={onOpen} bgColor={"#A6E3E9"}>
            <BsFillPencilFill />
          </Button>
        </Td>
        <Td>
          <Button
            bgColor={"red.400"}
            _hover={{ bgColor: "red.300" }}
            onClick={()=> funcProp(_id)}>
            <BsFillTrashFill color="white" />
          </Button>
        </Td>
      </Tr>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
          EDIT PRODUCT
        </Button>
      </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProductTable;
