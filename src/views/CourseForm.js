// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Portal,
  Progress,
  SimpleGrid,
  Spacer,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import IconBox from "components/Icons/IconBox";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import DashboardTableRow from "components/Tables/DashboardTableRow";
import TimelineRow from "components/Tables/TimelineRow";
import React, { useState } from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { dashboardTableData, timelineData } from "variables/general";

export default function CourseForm() {
  const value = "$100.000";
  // Chakra Color Mode
  const { colorMode, toggleColorMode } = useColorMode();
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const [series, setSeries] = useState([
    {
      type: "area",
      name: "Mobile apps",
      data: [190, 220, 205, 350, 370, 450, 400, 360, 210, 250, 292, 150],
    },
    {
      type: "area",
      name: "Websites",
      data: [400, 291, 121, 117, 25, 133, 121, 211, 147, 25, 201, 203],
    },
  ]);
  const overlayRef = React.useRef();

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing="24px">
        <Card minH="83px">
          <CardBody>
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat me="auto">
                <StatLabel
                  fontSize="sm"
                  color="gray.400"
                  fontWeight="bold"
                  pb=".1rem"
                >
                  Total courses
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor}>
                    53,059
                  </StatNumber>
                </Flex>
              </Stat>
              <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
                <WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
          </CardBody>
        </Card>
        <Card minH="83px">
          <CardBody>
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat me="auto">
                <StatLabel
                  fontSize="sm"
                  color="gray.400"
                  fontWeight="bold"
                  pb=".1rem"
                >
                  Today's Users
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor}>
                    2,300
                  </StatNumber>
                  <StatHelpText
                    alignSelf="flex-end"
                    justifySelf="flex-end"
                    m="0px"
                    color="green.400"
                    fontWeight="bold"
                    ps="3px"
                    fontSize="md"
                  >
                    +5%
                  </StatHelpText>
                </Flex>
              </Stat>
              <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
                <GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
          </CardBody>
        </Card>
        <Card minH="83px">
          <CardBody>
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat me="auto">
                <StatLabel
                  fontSize="sm"
                  color="gray.400"
                  fontWeight="bold"
                  pb=".1rem"
                >
                  New Traffic
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor} fontWeight="bold">
                    +73,000
                  </StatNumber>
                  <StatHelpText
                    alignSelf="flex-end"
                    justifySelf="flex-end"
                    m="0px"
                    color="green.400"
                    fontWeight="bold"
                    ps="3px"
                    fontSize="md"
                  >
                    +8%
                  </StatHelpText>
                </Flex>
              </Stat>
              <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
                <CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />
              </IconBox>
            </Flex>
          </CardBody>
        </Card>
      </SimpleGrid>

      <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        // gap="24px"
        // mb={{ lg: "26px" }}
        my="26px"
        gap="24px"
      >
        <Card p="16px">
          <CardBody>
            <Flex direction="column" w="100%">
              <BarChart />
              <Flex
                direction="column"
                mt="24px"
                mb="36px"
                alignSelf="flex-start"
              >
                <Text
                  fontSize="lg"
                  color={textColor}
                  fontWeight="bold"
                  mb="6px"
                >
                  Active Users
                </Text>
                <Text fontSize="md" fontWeight="medium" color="gray.400">
                  <Text as="span" color="green.400" fontWeight="bold">
                    (+23%)
                  </Text>{" "}
                  than last week
                </Text>
              </Flex>
              <SimpleGrid gap={{ sm: "12px" }} columns={4}>
                <Flex direction="column">
                  <Flex alignItems="center">
                    <IconBox
                      as="box"
                      h={"30px"}
                      w={"30px"}
                      bg={iconTeal}
                      me="6px"
                    >
                      <WalletIcon h={"15px"} w={"15px"} color={iconBoxInside} />
                    </IconBox>
                    <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                      Users
                    </Text>
                  </Flex>
                  <Text
                    fontSize="lg"
                    color={textColor}
                    fontWeight="bold"
                    mb="6px"
                    my="6px"
                  >
                    32,984
                  </Text>
                  <Progress
                    colorScheme="teal"
                    borderRadius="12px"
                    h="5px"
                    value={20}
                  />
                </Flex>
                <Flex direction="column">
                  <Flex alignItems="center">
                    <IconBox
                      as="box"
                      h={"30px"}
                      w={"30px"}
                      bg={iconTeal}
                      me="6px"
                    >
                      <RocketIcon h={"15px"} w={"15px"} color={iconBoxInside} />
                    </IconBox>
                    <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                      Clicks
                    </Text>
                  </Flex>
                  <Text
                    fontSize="lg"
                    color={textColor}
                    fontWeight="bold"
                    mb="6px"
                    my="6px"
                  >
                    2.42m
                  </Text>
                  <Progress
                    colorScheme="teal"
                    borderRadius="12px"
                    h="5px"
                    value={90}
                  />
                </Flex>
                <Flex direction="column">
                  <Flex alignItems="center">
                    <IconBox
                      as="box"
                      h={"30px"}
                      w={"30px"}
                      bg={iconTeal}
                      me="6px"
                    >
                      <CartIcon h={"15px"} w={"15px"} color={iconBoxInside} />
                    </IconBox>
                    <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                      Sales
                    </Text>
                  </Flex>
                  <Text
                    fontSize="lg"
                    color={textColor}
                    fontWeight="bold"
                    mb="6px"
                    my="6px"
                  >
                    2,400$
                  </Text>
                  <Progress
                    colorScheme="teal"
                    borderRadius="12px"
                    h="5px"
                    value={30}
                  />
                </Flex>
                <Flex direction="column">
                  <Flex alignItems="center">
                    <IconBox
                      as="box"
                      h={"30px"}
                      w={"30px"}
                      bg={iconTeal}
                      me="6px"
                    >
                      <StatsIcon h={"15px"} w={"15px"} color={iconBoxInside} />
                    </IconBox>
                    <Text fontSize="sm" color="gray.400" fontWeight="semibold">
                      Items
                    </Text>
                  </Flex>
                  <Text
                    fontSize="lg"
                    color={textColor}
                    fontWeight="bold"
                    mb="6px"
                    my="6px"
                  >
                    320
                  </Text>
                  <Progress
                    colorScheme="teal"
                    borderRadius="12px"
                    h="5px"
                    value={50}
                  />
                </Flex>
              </SimpleGrid>
            </Flex>
          </CardBody>
        </Card>
        <Card p="28px 10px 16px 0px" mb={{ sm: "26px", lg: "0px" }}>
          <CardHeader mb="20px" pl="22px">
            <Flex direction="column" alignSelf="flex-start">
              <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px">
                Reviews Overview
              </Text>
              <Text fontSize="md" fontWeight="medium" color="gray.400">
                <Text as="span" color="green.400" fontWeight="bold">
                  (+5%) more positive reviews
                </Text>{" "}
                in 2021
              </Text>
            </Flex>
          </CardHeader>
          <Box w="100%" h={{ sm: "300px" }} ps="8px">
            <LineChart />
          </Box>
        </Card>
      </Grid>
    </Flex>
  );
}
