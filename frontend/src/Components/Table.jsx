import { Tr, Td, Button, Image } from "@chakra-ui/react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function ProductTable(product) {
  const { deleteModal } = product;
  const navigate = useNavigate();

  const handleEdit = () => {
    const currentData = {
      image: product.image,
      title: product.title,
      category: product.category,
      brand: product.brand,
      price: product.price,
    };
    localStorage.setItem("currentDetails", JSON.stringify(currentData));
    navigate("/admin/edit");
  };

  const handleDelete = () => {
    deleteModal.onOpen();
  };

  return (
    <>
      <Tr>
        <Td>
          <Image w={"100px"} src={product.image} />
        </Td>
        <Td>{product.title}</Td>
        <Td>{product.brand}</Td>
        <Td>{product.gender}</Td>
        <Td>{product.category}</Td>
        <Td>₹{product.price}</Td>
        <Td>
          <Button onClick={handleEdit} bgColor={"#A6E3E9"}>
            <BsFillPencilFill />
          </Button>
        </Td>
        <Td>
          <Button
            bgColor={"red.400"}
            _hover={{ bgColor: "red.300" }}
            onClick={handleDelete}>
            <BsFillTrashFill color="white" />
          </Button>
        </Td>
      </Tr>
    </>
  );
}

export default ProductTable;
