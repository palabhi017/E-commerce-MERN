import React, { useState, useEffect } from "react";

import { Box, VStack, Stack, Text } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../Redux/Products/product.action";
import CheckBoxes from "./CheckBoxes";
import { BRAND, CATEGORY } from "../Redux/Products/product.type";

const Filter = ({ handlesort }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch()
  const protype = useSelector((state) => state.productReducer.protypes);
  const category = useSelector((state) => state.productReducer.category);
  const brand = useSelector((state) => state.productReducer.brand);
  // const initialFilterValues = searchParams.getAll("filter");
 
  const [filterValues, setFilterValues] = useState(category||[]);
  const [filterValues1, setFilterValues1] = useState(brand||[]);
  let arr1 = ["saree", "kurtis", "dupatta", "palazzos"];
  let arr2 = ["banarasi","devastri","pisara","saara","satyam"];
  let arr3 = ["blazer","kurtas","shirt","T-shirt"]
  let arr4 = ["puma","levis","nike","adidas","gucci"]
  

  const handleFilterChange = (value) => {
    setFilterValues(value);
    dispatch({type:CATEGORY,payload:value})
  };
  const handleFilterChange1 = (value) => {
    setFilterValues1(value);
    dispatch({type:BRAND,payload:value})
};

  
  // useEffect(() => {
  //   let params = {};

    
  //   if (filterValues) params.filter = filterValues;

  //   setSearchParams(params);
  // }, [filterValues]);
  return (
    <>
     
      <VStack
        mt="20px"
        
        p="10px 20px"
        alignItems="left"
      >
       
        <Text pb="15px" textAlign="left" fontSize="20px" fontWeight="400">
          Category
        </Text>
        <CheckboxGroup
          color="green"
          value={filterValues}
          onChange={handleFilterChange}
        >
          <Stack
            spacing={[1, 5]}
            direction={["column"]}
            borderBottom="1px solid #999"
            pb="20px"
          >
            {protype &&
              protype === "women" &&
              arr1.map((e) => <CheckBoxes key={e} data={e} />)}
            {protype &&
              protype === "men" &&
              arr3.map((e) => <CheckBoxes key={e}  data={e} />)}
            
          </Stack>
        </CheckboxGroup>
        <Text pb="15px" textAlign="left" fontSize="20px" fontWeight="400">
          Brand
        </Text>
        <CheckboxGroup
          color="green"
          value={filterValues1}
          onChange={handleFilterChange1}
        >
          <Stack
            spacing={[1, 5]}
            direction={["column"]}
            borderBottom="1px solid #999"
            pb="20px"
          >
            {protype &&
              protype === "women" &&
              arr2.map((e) => <CheckBoxes key={e} data={e} />)}
            {protype &&
              protype === "men" &&
              arr4.map((e) => <CheckBoxes key={e}  data={e} />)}
            
          </Stack>
        </CheckboxGroup>
        {/* checking */}
        
            
      </VStack>
    </>
  );
};

export default Filter;
