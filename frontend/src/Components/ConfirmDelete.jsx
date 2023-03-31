import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import React from "react";

function ConfirmDeleteModal(props) {
  const { isOpen, onClose } = props.deleteModal;
  const { setDataState, dataState } = props;

  const handleDelete = () => {
    onClose();
    setDataState(!dataState);
  };
  return (
    <AlertDialog isCentered isOpen={isOpen} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Product
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              color={"white"}
              bgColor={"red.400"}
              _hover={{ bgColor: "red.300" }}
              onClick={handleDelete}
              ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default ConfirmDeleteModal;
