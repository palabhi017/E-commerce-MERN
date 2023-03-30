import {
  Center,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProductTable from "../Components/Table";
import ConfirmDeleteModal from "../Components/ConfirmDelete";

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

  async function fetchData() {
    setData(products);
  }

  useEffect(() => {
    fetchData();
  }, [dataState]);

  return (
    <Center
      pb={"60px"}
      px={"30px"}
      gap={12}
      flexDir={"column"}
      w={"100%"}
      mt={12}>
      <Heading color={"#333"}>List of Products</Heading>
      <ConfirmDeleteModal
        setDataState={setDataState}
        dataState={dataState}
        deleteModal={deleteModal}
      />
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
              ? data.map((product) => {
                  return (
                    <ProductTable
                      dataState={dataState}
                      setDataState={setDataState}
                      deleteModal={deleteModal}
                      image={product.image}
                      title={product.title}
                      price={product.price}
                      gender={product.gender}
                      category={product.category}
                      brand={product.brand}
                    />
                  );
                })
              : null}
          </Tbody>
        </Table>
      </TableContainer>
    </Center>
  );
}

export default AdminPanel;
