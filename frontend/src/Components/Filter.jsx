import React, { useState, useEffect } from "react";

import { Box, VStack, Stack, Text } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../Redux/Products/product.action";
import CheckBoxes from "./CheckBoxes";

const Filter = ({ handlesort }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const protype = useSelector((state) => state.productReducer.protypes);
  // const initialFilterValues = searchParams.getAll("filter");
 
  const [filterValues, setFilterValues] = useState([]);
  const [filterValues1, setFilterValues1] = useState([]);
  let arr1 = ["saree", "Kurtis", "Dupattas", "Blouse", "Patticoats", "Pants"];
  let arr2 = [
    "topwear",
    "bottomwear",
    "menaccessories",
    "menfootwear",
    "Kurtas",
  ];
  
  // const dispatch = useDispatch();

  const handleFilterChange = (value) => {
    setFilterValues(value);
    console.log(filterValues)
  };
  const handleFilterChange1 = (value) => {
    setFilterValues1(value);
    console.log(filterValues1)

  };

  
  useEffect(() => {
    let params = {};

    
    if (filterValues) params.filter = filterValues;

    setSearchParams(params);
  }, [filterValues]);
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
              arr2.map((e) => <CheckBoxes key={e}  data={e} />)}
            
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
              arr1.map((e) => <CheckBoxes key={e} data={e} />)}
            {protype &&
              protype === "men" &&
              arr2.map((e) => <CheckBoxes key={e}  data={e} />)}
            
          </Stack>
        </CheckboxGroup>
        {/* checking */}
        
            
      </VStack>
    </>
  );
};

export default Filter;
