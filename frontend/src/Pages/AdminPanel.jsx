import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductTable from "../Components/Table";
import ConfirmDeleteModal from "../Components/ConfirmDelete";
import axios from "axios"
import { useFormik } from "formik";
import { Link } from "react-router-dom";
const products = [
  {
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/e/p/m/m-t-25-2nd-bukkl-original-imaghnnzwdhya9mr.jpeg?q=70",
    title: "Men Printed Round Neck Black T-Shirt",
    price: 443,
    gender: "Men",
    category: "T-shirt",
    brand: "puma",
  },
  {
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/l/d/i/xl-mk-tsrt-03-makemode-original-imagjugmxfaxhmez.jpeg?q=70",
    title: "Men Striped Round Neck Pink T-Shirt",
    price: 269,
    gender: "Men",
    category: "T-shirt",
    brand: "puma",
  },
  {
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/x/v/e/l-all-rbcropn-sky-one-nb-nicky-boy-original-imagkq6hgg5gqsep.jpeg?q=70",
    title: "Men Printed Round Neck Multicolor T-Shirt",
    price: 229,
    gender: "Men",
    category: "T-shirt",
    brand: "puma",
  },
  {
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/y/t/k/xxs-t653-cgblwh-eyebogler-original-imaghyjv7kppbqxb.jpeg?q=70",
    title: "Men Color Block Round Neck Grey T-Shirt",
    price: 199,
    gender: "Men",
    category: "T-shirt",
    brand: "puma",
  },
  {
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/v/5/k/m-st-boxhead-black-smartees-original-imaggegtpgz5dhjj.jpeg?q=70",
    title: "Men Printed Round Neck Black T-Shirt",
    price: 179,
    gender: "Men",
    category: "T-shirt",
    brand: "puma",
  },
  {
    image:
      "https://rukminim1.flixcart.com/image/612/612/kl6wx3k0/t-shirt/y/n/i/s-bbt-try-this-original-imagydarhsryeahn.jpeg?q=70",
    title: "Men Color Block Round Neck White, Black T-Shirt",
    price: 199,
    gender: "Men",
    category: "T-shirt",
    brand: "nike",
  },
  {
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/u/l/t/xxl-bwtblnvmrpolo-pl5-blive-original-imagm7f6pgva4z3r.jpeg?q=70",
    title: "Men Striped Polo Neck Multicolor T-Shirt",
    price: 299,
    gender: "Men",
    category: "T-shirt",
    brand: "nike",
  },
  {
    image:
      "https://rukminim1.flixcart.com/image/612/612/k572gsw0/t-shirt/p/z/7/xl-ntc-t-205-206-full-new-trends-collection-original-imafnxzgbrnrwjx7.jpeg?q=70",
    title: "Pack of 2 Men Solid Round Neck White, Black T-Shirt",
    price: 500,
    gender: "Men",
    category: "T-shirt",
    brand: "nike",
  },
  {
    image:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/y/0/5/s-bmrhenful-z14-blive-original-imaghau6cw8g3gjy.jpeg?q=70",
    title: "Men Solid Henley Neck Maroon T-Shirt",
    price: 279,
    gender: "Men",
    category: "T-shirt",
    brand: "nike",
  },
  {
    image:
      "https://rukminim1.flixcart.com/image/612/612/l4zxn680/t-shirt/a/7/c/m-st-colorleaf-navy-smartees-original-imagfs4paqzgkteh.jpeg?q=70",
    title: "Men Printed Round Neck Dark Blue T-Shirt",
    price: 179,
    gender: "Men",
    category: "T-shirt",
    brand: "nike",
  },
];

function AdminPanel() {
  const [data, setData] = useState([]);
  const [dataState, setDataState] = useState(true);
  const deleteModal = useDisclosure();
 const toast = useToast()
 const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)

  
 const getAllProducts = async()=>{
 try {
  let res = await axios.get(`http://localhost:8080/product`)
  let data = res.data;
  setData(data)
 } catch (error) {
  console.log(error)
 }
  }



  const handleDelete = async(id) => {
    
    await axios.delete(`http://localhost:8080/product/delete/${id}`)
    getAllProducts()
    toast({
      position: "top",
      title: "Item Deleted",
      description: "Item deleted successfully form store.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  const handleEdit = async(id,item) => {
    try {
      console.log("edit")
    await axios.patch(`http://localhost:8080/product/update/${id}`,item)
    getAllProducts()
    toast({
      position: "top",
      title: "Item Updated",
      description: "Item Updated successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    } catch (error) {
      console.log(error)
    }
    
  };

  useEffect(() => {
    getAllProducts();
  }, [dataState]);

  return (
    <>
    <Center
      pb={"60px"}
      px={"30px"}
      gap={12}
      flexDir={"column"}
      w={"100%"}
      mt={12}>
      <Heading color={"#333"}>List of Products</Heading>
      
     <Link to="/admin/add"> <Button bgColor={"red.400"} color="white" alignSelf={"right"}>+ Add Item</Button></Link>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Title</Th>
              <Th>Brand</Th>
              <Th>Gender</Th>
              <Th>Category</Th>
              <Th>Price</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data
              ? data.map((e) => {
                  return (
                    <ProductTable  key={e.id}
                    objProp={e}
                    funcProp={handleDelete}
                    funcedit={handleEdit}/>
                  );
                })
              : null}
          </Tbody>
        </Table>
      </TableContainer>
</Center>

</>
  );
}

export default AdminPanel;
