import {
  Box,
  Button,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { BsPencil } from "react-icons/bs";
import { TbBus } from "react-icons/tb";
import { RiCouponLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const dummy = [
  {
    img: "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/CataloguetemplateKOOVS_1_-06_a88e071b-7938-4eda-8d07-8e61c01e0d57.jpg?v=1680003786&width=360",
    title: "Koovs Disc sweatShirt",
    size: "S",
    color: "Grey",
    price: "1290.00",
    qnty: "1",
    id: 1,
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0677/1464/6315/products/CataloguetemplateKOOVS_1_-06_a88e071b-7938-4eda-8d07-8e61c01e0d57.jpg?v=1680003786&width=360",
    title: "Koovs Disc sweatShirt",
    size: "S",
    color: "Grey",
    price: "1290.00",
    qnty: "1",
    id: 2,
  },
];
const Cartpage = () => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/payment");
  };
const [cartdata,setCartdata] =  useState([])
  const {_id} = useSelector((state)=> state.Auth.currentUser)

const getcartdata = async(id)=>{
try {
  let res = await axios.get(`http://localhost:8080/cart/${id}`)
 setCartdata(res.data)  
} catch (error) {
  console.log(error)
}
}

const deletecartdata = async(id)=>{
  try {
     await axios.get(`http://localhost:8080/cart/delete/${id}`)
   getcartdata(_id)  
  } catch (error) {
    console.log(error)
  }
  }

useEffect(()=>{
  getcartdata(_id)
},[])
  return (
    <Box w="100%" mt="40px" mb="40px">
      <Heading
        fontWeight="400"
        fontSize="2rem"
        lineHeight="1.8rem"
        marginBottom={"20px"}
      >
        Shopping Cart
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
          <span style={{ marginRight: "15px" }}>&#62;</span> Your Shopping Cart
        </p>
      </Box>{" "}
      <Box display={{ base: "none", sm: "none", xl: "block" }}>
        <TableContainer
          width={"80%"}
          margin="auto"
          marginTop={"100px"}
          marginBottom="50px"
        >
          <Table variant="simple" justifyContent={"left"}>
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th textAlign={"left"}>Price</Th>
                <Th textAlign={"left"}>Qunatity</Th>
                <Th isNumeric>Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dummy && dummy.map((el) => {
                return (
                  <Tr
                    key={el.id}
                    boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 2px 0px"
                  >
                    <Td p="40px">
                      <Box display={"flex"} gap="10px">
                        <Image src={el.image} h="130px" />
                        <Box>
                          <Heading fontWeight={"600"} fontSize={"13px"}>
                            {el.title}
                          </Heading>
                          <Text fontSize={"12px"} color="grey">
                            <span style={{ fontWeight: "600" }}>SIZE : </span>
                            S
                          </Text>
                          <Text fontSize={"12px"} color="grey">
                            <span style={{ fontWeight: "600" }}>Brand : </span>
                            {el.brand}
                          </Text>
                          <Button
                            size="xs"
                            textAlign={"left"}
                            backgroundColor={"white"}
                            onClick={()=> deletecartdata(el._id)}
                          >
                            Remove
                          </Button>
                        </Box>
                      </Box>
                    </Td>
                    <Td>Rs. {el.price}</Td>
                    <Td>
                      <Box
                        display={"flex"}
                        w="50%"
                        alignItems="center"
                        gap="12px"
                        boxShadow={
                          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                        }
                      >
                        <Button
                          backgroundColor={"white"}
                          colorScheme="white"
                          color="black"
                        >
                          +
                        </Button>
                        <p>{el.qnty}</p>
                        <Button
                          backgroundColor={"white"}
                          colorScheme="white"
                          color="black"
                        >
                          -
                        </Button>
                      </Box>
                    </Td>
                    <Td isNumeric>Rs. {Number(el.price) * Number(el.qnty)}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <Box w="20%" position={"relative"} right="40" float={"right"} mt="20px">
          <Box
            p="10px 0px"
            pb="20px"
            borderBottom={"1px solid grey"}
            display={"flex"}
            justifyContent="space-between"
            position={"relative"}
          >
            <Box
              w="30%"
              display={"flex"}
              flexDirection="column"
              justifyContent={"center"}
              alignItems="center"
              borderRight={"1px solid grey"}
            >
              <BsPencil size="20px" />
              <Text>Note</Text>
            </Box>
            <Box
              borderRight={"1px solid grey"}
              w="30%"
              display={"flex"}
              flexDirection="column"
              justifyContent={"center"}
              alignItems="center"
            >
              <TbBus size="20px" />
              <Text>Shipping</Text>
            </Box>
            <Box
              w="30%"
              display={"flex"}
              flexDirection="column"
              justifyContent={"center"}
              alignItems="center"
            >
              <RiCouponLine size="20px" />
              <Text>Coupon</Text>
            </Box>
          </Box>
          <Box position={"relative"} mt="20px" mb="25px">
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              w="100%"
              mt="10px"
              fontSize={"15px"}
            >
              <Text>Shipping: </Text>
              <Text>FREE</Text>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              w="100%"
              mt="10px"
              fontSize={"15px"}
            >
              <Text>Subtotal</Text>
              <Text>Rs. 1290</Text>
            </Box>
          </Box>
          <Box>
            <Button
              onClick={handleClick}
              color={"white"}
              backgroundColor={"black"}
              w="100%"
              colorScheme="black"
              gap="8px"
            >
              <Box>
                <Text color="white">Place Order</Text>
                <Text color="white" fontSize={"10px"}>
                  5% Extra off on UPI
                </Text>
              </Box>
              <Image src="https://cdn.gokwik.co/v4/images/upi-icons.svg" />
              <Box color="white" fontSize={"20px"}>
                <span>&#62;</span>
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box w="90%" display={{ base: "block", sm: "block", xl: "none" }}>
        <TableContainer margin="auto" marginTop={"80px"} minW="0" width="100%">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th isNumeric>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dummy.map((el) => {
                return (
                  <Tr key={el.id}>
                    <Td p="10px" display={"flex"}>
                      <Box display={"flex"} gap="10px">
                        <Image src={el.img} h="90px" />
                        <Box
                          whiteSpace={"initial"}
                          textOverflow={"ellipsis"}
                          w="50%"
                        >
                          <Heading
                            w="100%"
                            fontWeight={"500"}
                            fontSize={"13px"}
                          >
                            {el.title}
                          </Heading>
                          <Text fontSize={"12px"} color="grey">
                            <span style={{ fontWeight: "600" }}>SIZE : </span>
                            {el.size}
                          </Text>
                          <Text fontSize={"12px"} color="grey">
                            <span style={{ fontWeight: "600" }}>Color : </span>
                            {el.color}
                          </Text>
                          <Button
                            size="xs"
                            textAlign={"left"}
                            backgroundColor={"white"}
                          >
                            Remove
                          </Button>
                        </Box>
                      </Box>
                    </Td>
                    <Td isNumeric>
                      Rs. {el.price}
                      <Box
                        marginTop={"8px"}
                        display={"flex"}
                        w="100%"
                        justifyContent={"left"}
                        alignItems="center"
                        gap="5px"
                        boxShadow={
                          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                        }
                      >
                        <Button
                          backgroundColor={"white"}
                          colorScheme="white"
                          color="black"
                          size="sm"
                        >
                          +
                        </Button>
                        <p style={{ fontSize: "small" }}>{el.qnty}</p>
                        <Button
                          backgroundColor={"white"}
                          colorScheme="white"
                          color="black"
                          size="sm"
                        >
                          -
                        </Button>
                      </Box>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <Box w="90%" m="auto" position={"relative"} mt="40px">
          <Box
            p="10px 0px"
            pb="20px"
            borderBottom={"1px solid grey"}
            display={"flex"}
            justifyContent="space-between"
            position={"relative"}
          >
            <Box
              w="30%"
              display={"flex"}
              flexDirection="column"
              justifyContent={"center"}
              alignItems="center"
              borderRight={"1px solid grey"}
            >
              <BsPencil size="20px" />
              <Text>Note</Text>
            </Box>
            <Box
              borderRight={"1px solid grey"}
              w="30%"
              display={"flex"}
              flexDirection="column"
              justifyContent={"center"}
              alignItems="center"
            >
              <TbBus size="20px" />
              <Text>Shipping</Text>
            </Box>
            <Box
              w="30%"
              display={"flex"}
              flexDirection="column"
              justifyContent={"center"}
              alignItems="center"
            >
              <RiCouponLine size="20px" />
              <Text>Coupon</Text>
            </Box>
          </Box>
          <Box position={"relative"} mt="20px" mb="25px">
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              w="100%"
              mt="10px"
              fontSize={"15px"}
            >
              <Text>Shipping: </Text>
              <Text>FREE</Text>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              w="100%"
              mt="10px"
              fontSize={"15px"}
            >
              <Text>Subtotal</Text>
              <Text>Rs. 1290</Text>
            </Box>
          </Box>
          <Box>
            <Button
              color={"white"}
              backgroundColor={"black"}
              w="100%"
              colorScheme="black"
              gap="8px"
            >
              <Box>
                <Text color="white">Place Order</Text>
                <Text color="white" fontSize={"10px"}>
                  5% Extra off on UPI
                </Text>
              </Box>
              <Image src="https://cdn.gokwik.co/v4/images/upi-icons.svg" />
              <Box color="white" fontSize={"20px"}>
                <span>&#62;</span>
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cartpage;
