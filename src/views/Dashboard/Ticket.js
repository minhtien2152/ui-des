import React from "react";
// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Tooltip,
  Select,
  IconButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TablesProjectRow from "components/Tables/TablesProjectRow";
import CoursesTable from "components/Tables/CoursesTable";
import { tablesProjectData, tablesTableData } from "variables/general";
import tickets from "variables/ticket";

import TicketTable from "components/Tables/TicketTable";
function Tickets() {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Tickets
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" color="gray.400">
                  Subject
                </Th>

                <Th color="gray.400">User's name</Th>
                <Th color="gray.400">Date</Th>
                <Th color="gray.400">Status</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tickets.map((row) => {
                return (
                  <TicketTable
                    name={row.name}
                    email={row.email}
                    status={row.status}
                    date={row.date}
                    img={row.img}
                    subject={row.subject}
                    content={row.content}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
      <Flex justifyContent="center" m={4} alignItems="center">
        <Flex>
          <Tooltip label="First Page">
            <IconButton icon={<ArrowLeftIcon h={3} w={3} />} mr={4} />
          </Tooltip>
          <Tooltip label="Previous Page">
            <IconButton icon={<ChevronLeftIcon h={6} w={6} />} />
          </Tooltip>
        </Flex>

        <Flex alignItems="center">
          <Text flexShrink="0" ml={3} mr={8}>
            Page{" "}
            <Text fontWeight="bold" as="span">
              1
            </Text>{" "}
            of{" "}
            <Text fontWeight="bold" as="span">
              1000
            </Text>
          </Text>
          <Text flexShrink="0">Go to page:</Text>{" "}
          <NumberInput ml={2} mr={8} w={28} min={1} max={1000} defaultValue={1}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Select w={32} mr={3}>
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </Select>
        </Flex>

        <Flex>
          <Tooltip label="Next Page">
            <IconButton icon={<ChevronRightIcon h={6} w={6} />} />
          </Tooltip>
          <Tooltip label="Last Page">
            <IconButton icon={<ArrowRightIcon h={3} w={3} />} ml={4} />
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Tickets;
