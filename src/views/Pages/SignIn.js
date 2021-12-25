import React from "react";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import signInImage from "assets/img/signInImage.png";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
function SignIn() {
  // Chakra color mode
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");
  const toast = useToast();
  let history = useHistory();
  const onSubmit = () => {
    toast({
      title: "Login successful.",

      status: "success",
      duration: 2000,
      isClosable: true,
    });
    history.push("/admin");
  };

  return (
    <Flex
      position="relative"
      backgroundImage={signInImage}
      backgroundSize="cover"
      h="100vh"
    >
      <Flex h="100%" w="100%" maxW="1044px" mx="auto" justifyContent="center">
        <Flex
          alignItems="center"
          justifyContent="center"
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "70%", lg: "50%" }}
        >
          <Flex direction="column" w="100%" background="transparent" p="48px">
            <Card>
              <Box p="20px">
                <Heading color={titleColor} fontSize="32px" mb="10px">
                  Welcome Back
                </Heading>
                <Text
                  mb="36px"
                  ms="4px"
                  color={textColor}
                  fontWeight="bold"
                  fontSize="14px"
                >
                  Enter your email and password to sign in
                </Text>
                <FormControl>
                  <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                    Email
                  </FormLabel>
                  <Input
                    borderRadius="15px"
                    mb="24px"
                    fontSize="sm"
                    type="text"
                    placeholder="Your email adress"
                    size="lg"
                  />
                  <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                    Password
                  </FormLabel>
                  <Input
                    borderRadius="15px"
                    mb="36px"
                    fontSize="sm"
                    type="password"
                    placeholder="Your password"
                    size="lg"
                  />
                  <FormControl display="flex" alignItems="center">
                    <Switch id="remember-login" colorScheme="teal" me="10px" />
                    <FormLabel
                      htmlFor="remember-login"
                      mb="0"
                      ms="1"
                      fontWeight="normal"
                    >
                      Remember me
                    </FormLabel>
                  </FormControl>
                  <Button
                    fontSize="10px"
                    type="submit"
                    bg="teal.300"
                    w="100%"
                    h="45"
                    mb="20px"
                    color="white"
                    mt="20px"
                    _hover={{
                      bg: "teal.200",
                    }}
                    _active={{
                      bg: "teal.400",
                    }}
                    onClick={onSubmit}
                  >
                    SIGN IN
                  </Button>
                </FormControl>
              </Box>
            </Card>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignIn;
