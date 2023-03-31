import { VStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ProductCard = ({image,title,price}) => {
  return (
    <VStack h="450px" alignItems={"left"}>
    <Image h="75%" src={image}></Image>
    <Text textAlign={"left"} fontSize="13px" color="#999" >DESI WEARS</Text>
    <Text textAlign={"left"} fontSize="15px" fontWeight={"600"} noOfLines={1}>{title}</Text>
    <Text textAlign={"left"} fontWeight={"600"}>Rs. {price}.00</Text>
 </VStack>
  )
}

export default ProductCard