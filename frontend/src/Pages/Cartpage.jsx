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
import React, { useState } from "react";

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
  return (
    <Box w="100%">
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
              {dummy.map((el) => {
                return (
                  <Tr
                    key={el.id}
                    boxShadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 2px 0px"
                  >
                    <Td p="40px">
                      <Box display={"flex"} gap="10px">
                        <Image src={el.img} h="130px" />
                        <Box>
                          <Heading fontWeight={"600"} fontSize={"13px"}>
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
        <Box position={"relative"}>
          <Box
            w="20%"
            p="0px 10px"
            display={"flex"}
            justifyContent="space-evenly"
            position={"relative"}
            right="40"
            float={"right"}
          >
            <Box
              w="30%"
              display={"flex"}
              flexDirection="column"
              justifyContent={"center"}
              alignItems="center"
            >
              <BsPencil size="20px" />
              <Text>Note</Text>
            </Box>
            <Box
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
          <br/>
          <Box
            w="20%"
            p="0px 10px"
            display={"flex"}
            justifyContent="space-evenly"
            position={"relative"}
            right="40"
            float={"right"}
          >
            <Box display={"flex"}>
              <Text>Shipping: </Text>
              <Text>FREE</Text>
            </Box>
            <Box>
              <Text>Subtotal</Text>
              <Text>Rs. 1290</Text>
            </Box>
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
      </Box>
    </Box>
  );
};

export default Cartpage;
