import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
  Progress,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Switch,
  Select,
  FormErrorMessage,
  Icon,
  InputGroup,
} from "@chakra-ui/react";
import React from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import FileUpload from "components/FileUpload";
import { useToast } from "@chakra-ui/react";
function CategoryTable(props) {
  const { name, status, course, path } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDelete,
    onClose: onCloseDelete,
  } = useDisclosure();
  const toast = useToast();
  const onSubmit = () => {
    toast({
      title: "Save successful.",

      status: "success",
      duration: 2000,
      isClosable: true,
    });
    onClose();
  };
  const onDelete = () => {
    toast({
      title: "Delete successful.",

      status: "success",
      duration: 2000,
      isClosable: true,
    });
    onCloseDelete();
  };
  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td>
        <Badge
          bg={status === "Online" ? "green.400" : bgStatus}
          color={status === "Online" ? "white" : colorStatus}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {status}
        </Badge>
      </Td>
      <Td>
        <Text fontSize="md" color="teal.300" fontWeight="bold" pb=".2rem">
          {course}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {path}
        </Text>
      </Td>

      <Td>
        <Button p="0px" bg="transparent" variant="no-hover" onClick={onOpen}>
          <Text
            fontSize="md"
            color="gray.400"
            fontWeight="bold"
            cursor="pointer"
          >
            Edit
          </Text>
        </Button>
        <Button
          p="5px"
          bg="transparent"
          variant="no-hover"
          onClick={onOpenDelete}
        >
          <Text
            fontSize="md"
            color="red.400"
            fontWeight="bold"
            cursor="pointer"
          >
            Delete
          </Text>
        </Button>
      </Td>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Category name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Path</FormLabel>
              <Input placeholder="Category path" />
            </FormControl>

            <FormControl mt={4} display="flex" alignItems="center">
              <FormLabel mb="0">Enabled?</FormLabel>
              <Switch />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="red" onClick={onSubmit}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Notification</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Are you sure u want to delete this?</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="red" onClick={onDelete}>
              Yes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Tr>
  );
}

export default CategoryTable;
