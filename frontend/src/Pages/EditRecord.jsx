import {
  Alert,
  AlertIcon,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function EditRecord() {
  const [error, setError] = useState("");
  const [defaultImage, setDefaultImage] = useState("");
  const [defaultTitle, setDefaultTitle] = useState("");
  const [defaultCategory, setDefaultCategory] = useState("");
  const [defaultPrice, setDefaultPrice] = useState("");
  const [defualtBrand, setDefualtBrand] = useState("");
  const imgRef = useRef();
  const titleRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();
  const brandRef = useRef();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    if (
      imgRef.current.value === "" ||
      titleRef.current.value === "" ||
      categoryRef.current.value === "" ||
      priceRef.current.value === "" ||
      brandRef.current.value === ""
    ) {
      setError("Please fill all of the fields");
      return;
    }

    const user = {
      image: imgRef.current.value,
      title: titleRef.current.value,
      category: categoryRef.current.value,
      price: priceRef.current.value,
      brand: brandRef.current.value,
    };
    navigate("/");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentDetails"));
    const { image, title, category, price, brand } = user;
    setDefaultImage(image);
    setDefaultTitle(title);
    setDefaultCategory(category);
    setDefaultPrice(price);
    setDefualtBrand(brand);
    console.log(user);
  }, []);

  return (
    <Center
      gap={12}
      flexDir={"column"}
      margin={"auto"}
      mt={12}
      justifyContent={"center"}
      px={"30px"}
      maxW={"700px"}>
      <Heading color={"#333"}>Update Product Details</Heading>
      <FormControl>
        {error === "" ? null : (
          <Alert borderRadius={"5px"} mb={4} status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
        <Flex gap={3}>
          <Flex mb={6} w={"39%"} flexDirection={"column"}>
            <FormLabel>Title</FormLabel>
            <Input
              defaultValue={defaultTitle}
              ref={titleRef}
              type={"text"}></Input>
          </Flex>
          <Flex w={"39%"} flexDirection={"column"}>
            <FormLabel>Brand</FormLabel>
            <Input
              defaultValue={defualtBrand}
              ref={brandRef}
              type={"text"}></Input>
          </Flex>
          <Flex w={"22%"} flexDirection={"column"}>
            <FormLabel>Price</FormLabel>
            <Input
              defaultValue={defaultPrice}
              ref={priceRef}
              type={"text"}></Input>
          </Flex>
        </Flex>
        <Flex gap={3}>
          <Flex w={"20%"} flexDirection={"column"}>
            <FormLabel>Category</FormLabel>
            <Input defaultValue={defaultCategory} ref={categoryRef}></Input>
          </Flex>
          <Flex w={"80%"} flexDirection={"column"}>
            <FormLabel>Image</FormLabel>
            <Input
              defaultValue={defaultImage}
              ref={imgRef}
              type={"email"}></Input>
          </Flex>
        </Flex>
        <Button
          onClick={(e) => handleForm(e)}
          bgColor={"#A6E3E9"}
          w={"100%"}
          mt={8}>
          UPDATE PRODUCT
        </Button>
      </FormControl>
    </Center>
  );
}

export default EditRecord;
