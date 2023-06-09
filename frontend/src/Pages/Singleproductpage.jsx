import {
  Box,
 
  Text,
  Image,
  Flex,
  
  Button,
  Heading,
  
  useColorModeValue,
 
  HStack,
  useRadioGroup,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';


import { BsFillEyeFill } from "react-icons/bs";
import SizeBar from './SizeBar';
import {ViewIcon } from "@chakra-ui/icons";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { CARTITEMS } from '../Redux/Products/product.type';

export default function Singleproductpage() {
  const [data,setData] = useState({})
  const {id} = useParams();
const {_id} = useSelector((state)=> state.Auth.currentUser)
const dispatch = useDispatch()

  const getProduct = async () => {
 
    try {
        let res = await axios.get(`http://localhost:8080/product/${id}`)
        
        setData(res.data)
    } catch (error) {
        return error;
    }
}

const addtocart = async () => {
 const item = {
  image:data?.image,
  title:data?.title,
  price:data?.price,
  gender:data?.gender,
  category:data?.category,
  brand:data?.brand,
  quantity:1,
  userID:_id
 }
  try {
     await axios.post(`http://localhost:8080/cart/add`,item)
      
      getcartdata(_id)
  } catch (error) {
      return error;
  }
}

const getcartdata = async(id)=>{
  try {
    let res = await axios.get(`http://localhost:8080/cart/${id}`)
  
  
   dispatch({type:CARTITEMS,payload:res.data.length})
  } catch (error) {
    console.log(error)
  }
  }
  
    const options = ["S", "M", "L", "XL"];
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: "size",
      defaultValue: "S",
      onChange: console.log,
    });
    const group = getRootProps();

useEffect(()=>{
  getProduct()
},[])
  return (
  //  <Box w={'90%'} m={'auto'} mt={"5%"}>
  //   <Box marginBottom={"50px"}>
  //       <Breadcrumb
  //         spacing="8px"
  //         separator={<ChevronRightIcon color="gray.500" />}
  //       >
  //         <BreadcrumbItem>
  //           <BreadcrumbLink href="#">Home</BreadcrumbLink>
  //         </BreadcrumbItem>

  //         <BreadcrumbItem>
  //           <BreadcrumbLink href="#">All Product</BreadcrumbLink>
  //         </BreadcrumbItem>
  //         <BreadcrumbItem>
  //           <BreadcrumbLink href="#">Watch</BreadcrumbLink>
  //         </BreadcrumbItem>
  //       </Breadcrumb>
  //     </Box>
  //    <Box>
  //     <Flex>
  //       <Flex  w={'90%'}>
  //         <Box maxW={'15%'} >
  //           <Box boxShadow={'md'} pt={'0.5rem'}  overflow={'hidden'} >
  //           <Image
  //          borderRadius={'0.3rem'}
  //           alt={'product image'}
  //           src={
  //             'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
  //           }
  //           fit={'cover'}
  //           align={'center'}
  //           w={'90%'}
            
  //         />
  //           </Box>
  //           <Box boxShadow={'md'} pt={'1rem'}   overflow={'hidden'} >
  //           <Image
  //          borderRadius={'0.3rem'}
  //           alt={'product image'}
  //           src={
  //             'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
  //           }
  //           fit={'cover'}
  //           align={'center'}
  //           w={'90%'}
            
  //         />
  //           </Box>
  //           <Box boxShadow={'md'} pt={'1rem'}  overflow={'hidden'} >
  //           <Image
  //          borderRadius={'0.3rem'}
  //           alt={'product image'}
  //           src={
  //             'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
  //           }
  //           fit={'cover'}
  //           align={'center'}
  //           w={'90%'}
            
  //         />
  //           </Box>
  //           <Box boxShadow={'md'} pt={'1rem'}  overflow={'hidden'} >
  //           <Image
  //          borderRadius={'0.3rem'}
  //           alt={'product image'}
  //           src={
  //             'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
  //           }
  //           fit={'cover'}
  //           align={'center'}
  //           w={'90%'}
            
  //         />
  //           </Box>
  //         </Box>
  //        <Flex > <Image
  //           rounded={'md'}
  //           alt={'product image'}
  //           src={
  //             'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
  //           }
  //           fit={'cover'}
  //           w='100%'
  //           align={'center'}
  //          h={'100%'}
  //         /></Flex>
  //       </Flex>
  //       <Box textAlign='left' marginLeft={"4%"}>
  //         <Box  >
  //           <Heading
             
  //             fontWeight={600}
  //             fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
  //             {data.title}
  //           </Heading>
  //           <Text
  //             color={useColorModeValue('gray.900', 'gray.400')}
  //             fontWeight={300}
  //             fontSize={'2xl'}>
  //             ${data.price}.00
  //           </Text>
  //         </Box>

          
  //             <Text
  //               color={useColorModeValue('gray.500', 'gray.400')}
  //               fontSize={'2xl'}
  //               fontWeight={'300'}>
  //               Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
  //               diam nonumy eirmod tempor invidunt ut labore
  //             </Text>
  //             <Flex>
  //             <BsFillEyeFill style={{ color: "gray" }} />
  //             <Text  textTransform={"capitalize"} noOfLines={"2"} fontSize={"sm"}>
  //                people are viewing this right now
  //             </Text>
  //             </Flex>
                
          
  //            {/* Cloth Sizes */}
  //            <Flex my={"3"} direction={"column"}>
  //             <Text as={"b"} mb={"2"}>
  //               Size: S
  //             </Text>
  //             <HStack {...group}>
  //               {options.map((value) => {
  //                 const radio = getRadioProps({ value });
  //                 return (
  //                   <SizeBar key={value} {...radio}>
  //                     {value}
  //                   </SizeBar>
  //                 );
  //               })}
  //             </HStack>
  //           </Flex>
  //         <Button
  //           rounded={'none'}
  //           w={'full'}
  //           mt={8}
  //           size={'lg'}
  //           py={'7'}
  //           bg={useColorModeValue('gray.900', 'gray.50')}
  //           color={useColorModeValue('white', 'gray.900')}
  //           textTransform={'uppercase'}
  //           onClick={()=> addtocart()}
  //           _hover={{
  //             transform: 'translateY(2px)',
  //             boxShadow: 'lg',
  //           }}>
  //           Add to cart
  //         </Button>

         
  //       </Box>
       
  //     </Flex>
  //     <Box>
  //     <Flex mx={"12"} mt={"8"} direction={"column"}>
  //         <Tabs align="center">
  //           <TabList>
  //             <Tab>Product Description</Tab>
  //             <Tab>Shipping & Return</Tab>
  //             <Tab>Material & Care</Tab>
  //           </TabList>

  //           <TabPanels>
  //             <TabPanel>
  //               <Flex w={"100%"} direction={"column"} alignItems={"flex-start"}>
  //                 <Text>productdescription</Text>
  //               </Flex>
  //             </TabPanel>
  //             <TabPanel>
  //               <Flex direction={"column"} alignItems={"center"}>
  //                 <Text fontSize={"sm"}>India-wide Shipping Average time: 4-6 days after the order confirmation.</Text>
  //                 <Text as={"b"}>SHIPPING POLICY</Text>
  //                 <Text fontSize={"sm"}>
  //                   Any product bought from https://koovs.com, will be shipped to the cusrtomer maximum within 4 to 6 days. In case of any exceptions, due to non-availability of a
  //                   certain product, we will inform the customer through the email id provided in the customer registration form.
  //                 </Text>
  //                 <Text fontSize={"sm"}>
  //                   If an item in your order isn’t immediately available in our warehouse, then please allow 1 to 2 weeks for your purchase to be processed. Your order may be
  //                   processed in multiple shipments, in which case you will be notified of the tracking number when each shipment occurs.
  //                 </Text>
  //                 <Text fontSize={"sm"}>Any COD orders, if available, will be charged extra @ INR 100 Flat. </Text>
  //                 <Text as={"b"}>RETURN/EXHANGE POLICY</Text>
  //                 <Text fontSize={"sm"}>
  //                   Koovs has a flat 7 days return policy to all our customers. You can conveniently return or exchange any item within 7 days from the date of receipt of the
  //                   product. To initiate return or exchange, mail us at care@koovs.com
  //                 </Text>
  //               </Flex>
  //             </TabPanel>
  //             <TabPanel>
  //               <Flex w={"100%"} direction={"column"} alignItems={"flex-start"}>
  //                 <Text>Wash inside out</Text>
  //                 <Text>Wash with similar colours</Text>
  //               </Flex>
  //             </TabPanel>
  //           </TabPanels>
  //         </Tabs>
  //       </Flex>
  //      </Box>
  //   </Box>
  //  </Box>
  <>
  <HStack w="100%" h="700px" p="30px 60px">
    <HStack w="50%" h="100%"  p="10px 20px" justifyContent={"space-around"}>
      <VStack h="90%" w="13%" gap="15px">
        <Box w="100%" h="15%">
          <Image src={data.image} h="100%" w="100%"></Image>
        </Box>
        <Box w="100%" h="15%">
          <Image src={data.image} h="100%" w="100%"></Image>
        </Box>
        <Box w="100%" h="15%">
          <Image src={data.image} h="100%" w="100%"></Image>
        </Box>
        <Box w="100%" h="15%">
          <Image src={data.image} h="100%" w="100%"></Image>
        </Box>
        <Box w="100%" h="15%">
          <Image src={data.image} h="100%" w="100%"></Image>
        </Box>
        
      </VStack>
      <Box w="80%" h="90%">
        <Image src={data.image} h="100%" w="100%"></Image>
        </Box>  
    </HStack>
    <VStack w="50%" h="100%" p="10px 20px" alignItems="baseline"> 
      <Text noOfLines={1} fontSize={"25px"} >{data.title}</Text>
      <Text noOfLines={1} fontSize={"25px"} >Rs.{"  "}{data.price}.00</Text>
      <Text noOfLines={1} fontSize={"15px"} style={{marginTop:"-5px"}}>Tax included.</Text>
      <Text noOfLines={1} fontSize={"15px"} mt="20px" style={{marginTop:"30px"}}><ViewIcon boxSize="20px"/>{"  "}20 people are viewing this right now</Text>
     <Box style={{marginTop:"30px",alignItems:'center'}}>
     <Text noOfLines={1} fontSize={"20px"} >Size:{" "}S</Text>
          <Flex gap="10px" mt="10px">
            <Button w="20px" bgColor="black" color="white">S</Button>
            <Button w="20px">M</Button>
            <Button w="20px">L</Button>
          </Flex>
     </Box>
     <Box style={{marginTop:"30px"}}>
     <Text noOfLines={1} fontSize={"20px"} >Color:blue</Text>
      <Box h="30px" w="30px" borderRadius={"50%"} bgColor="blue" mt="10px"></Box>
     </Box>
     <Box style={{marginTop:"30px",alignItems:'center'}}>
     <Text noOfLines={1} fontSize={"20px"} >1: KV-FDM-B111</Text>
          <Flex gap="10px" mt="10px">
            <Button  bgColor="black" color="white">KV-FDM-B111</Button>
           
          </Flex>
     </Box>
     <VStack w="100%">
     <Button w="100%" mt="20px" bgColor="white" border="1px solid black" onClick={()=> addtocart()}>Add to cart</Button>
     <Button w="100%" mt="20px" bgColor="black" color="white">Buy It Now</Button>

     </VStack>
    </VStack>
  </HStack>
  </>
  );
}