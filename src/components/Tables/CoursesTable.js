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
  Select,
} from "@chakra-ui/react";
import React from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import { useToast } from "@chakra-ui/react";
function CoursesTable(props) {
  const { name, instructor, platform, status, pos, category } = props;
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
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {instructor}
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
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {platform}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          {category}
        </Text>
      </Td>
      <Td>
        <Flex direction="column">
          <Text
            fontSize="md"
            color="teal.300"
            fontWeight="bold"
            pb=".2rem"
          >{`${pos}%`}</Text>
          <Progress
            colorScheme={pos === 100 ? "teal" : "cyan"}
            size="xs"
            value={pos}
            borderRadius="15px"
          />
        </Flex>
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
          <ModalHeader>Edit course</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Course name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea resize="vertical" placeholder="Desciption" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Knowledge</FormLabel>
              <Input placeholder="Desciption" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Requirements</FormLabel>
              <Input placeholder="Desciption" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Platform</FormLabel>
              <Select placeholder="Select platform">
                <option value="option1">Programming</option>
                <option value="option2">Business</option>
                <option value="option3">Finance</option>
                <option value="option3">Personal Developement</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Instructor</FormLabel>
              <Select placeholder="Select instructor">
                <option value="option1">Awantik Das</option>
                <option value="option2">Kirill Eremenko</option>
                <option value="option3">Scott Harris</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Select placeholder="Select category">
                <option value="option1">Udemy</option>
                <option value="option2">Unica</option>
                <option value="option3">Pluralsight</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>URL</FormLabel>
              <Input placeholder="Desciption" />
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

export default CoursesTable;
