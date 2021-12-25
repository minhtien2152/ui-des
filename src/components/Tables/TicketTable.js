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
import { Separator } from "components/Separator/Separator";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
function TicketTable(props) {
  const { name, status, date, subject, email, img, content } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const onSubmit = () => {
    toast({
      title: "Mark as resolved.",

      status: "success",
      duration: 2000,
      isClosable: true,
    });
    onClose();
  };
  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar src={img} w="50px" borderRadius="50px" me="18px" />
          <Flex direction="column">
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {subject}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {email}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td>
        <Text fontSize="md" color="gray.500" fontWeight="bold" pb=".5rem">
          {name}
        </Text>
      </Td>
      <Td>
        <Text fontSize="md" color="teal.300" fontWeight="bold" pb=".2rem">
          {date}
        </Text>
      </Td>
      <Td>
        <Badge
          bg={status === "Pending" ? "green.400" : bgStatus}
          color={status === "Online" ? "white" : colorStatus}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {status}
        </Badge>
      </Td>

      <Td>
        <Button p="5px" bg="transparent" variant="no-hover" onClick={onOpen}>
          <Text
            fontSize="md"
            color="cyan.400"
            fontWeight="bold"
            cursor="pointer"
          >
            View
          </Text>
        </Button>
      </Td>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ticket</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              borderBottom="1px"
              borderColor="gray.300"
              align="center"
              py=".8rem"
              minWidth="100%"
              flexWrap="nowrap"
            >
              <Avatar src={img} w="50px" borderRadius="50px" me="18px" />

              <Flex direction="column">
                <Text fontSize="md" color={textColor} fontWeight="bold">
                  From: {name}
                </Text>

                <Text fontSize="sm" color="gray.400" fontWeight="normal">
                  {email}
                </Text>
                <Text
                  fontSize="md"
                  color={textColor}
                  fontWeight="bold"
                  minWidth="100%"
                >
                  Subject: {subject}
                </Text>
              </Flex>
            </Flex>
            <Flex py="4">{content}</Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="red" onClick={onSubmit}>
              Mark as Resolved
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Tr>
  );
}

export default TicketTable;
