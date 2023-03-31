import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
const validate = (value) => {
  console.log(value, "abbb");
};

const Payment = () => {
  const [address, setAddress] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const updateData = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(address, "a");
    onOpen();
  };
  return (
    <Box mt="50px">
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Card Number" type="number" />
            <Input placeholder="CVV" type="number" />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box w="40%" m="auto">
        <FormControl onSubmit={submit} _valid={() => validate(address)}>
          <FormLabel>Add Delievery Address</FormLabel>
          <Box display={"flex"} mt="20px" justifyContent={"space-between"}>
            <Input
              w="45%"
              name="name"
              onChange={updateData}
              placeholder="Name"
              type="text"
              border="1px solid"
            />
            <Input
              w="45%"
              border="1px solid"
              onChange={updateData}
              name="mobile_number"
              placeholder="10-digit mobile number"
              type="number"
            />
          </Box>
          <Box display={"flex"} mt="20px" justifyContent={"space-between"}>
            <Input
              w="45%"
              border="1px solid"
              name="pincode"
              placeholder="Pincode"
              onChange={updateData}
              type="number"
            />
            <Input
              w="45%"
              border="1px solid"
              name="locality"
              placeholder="Locality"
              onChange={updateData}
              type="text"
            />
          </Box>
          <Input
            name="address"
            w="100%"
            h="100px"
            border="1px solid"
            placeholder="Address (Area and Street)"
            onChange={updateData}
            type="text"
            mt="20px"
          />
          <Box display={"flex"} mt="20px" justifyContent={"space-between"}>
            <Input
              w="45%"
              border="1px solid"
              name="city"
              placeholder="City/District/Town"
              onChange={updateData}
              type="text"
            />
            <Input
              w="45%"
              border="1px solid"
              name="state"
              placeholder="State"
              onChange={updateData}
              type="text"
            />
          </Box>
          <Box display={"flex"} mt="20px" justifyContent={"space-between"}>
            <Input
              w="45%"
              border="1px solid"
              name="landmark"
              onChange={updateData}
              placeholder="Landmark (Optional)"
              type="text"
            />
            <Input
              w="45%"
              border="1px solid"
              name="alt_phone"
              onChange={updateData}
              placeholder="Alternate Phone Number (Optional)"
              type="number"
            />
          </Box>
          <Button
            mt="20px"
            mb="10px"
            colorScheme="black"
            type="submit"
            color="white"
            onClick={submit}
            backgroundColor={"black"}
          >
            Add Adress
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Payment;
