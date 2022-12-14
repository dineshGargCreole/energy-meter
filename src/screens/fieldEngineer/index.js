import React from "react";
import {
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from "@chakra-ui/react";

function FieldEngineer() {
  const findMeterByCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("pos", position);
    });
  };

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Button
        background={"#43c4f2"}
        color={"#fff"}
        marginLeft={"auto"}
        _hover={"none"}
        onClick={findMeterByCurrentLocation}
        marginBottom={"80px"}
      >
        Find Energy Meter By Current Location
      </Button>
      <TableContainer>
        <Table variant="striped" background={"#bfdfea"}>
          <TableCaption>Nearest energy meter from your location</TableCaption>
          <Thead>
            <Tr>
              <Th>Sr. No.</Th>
              <Th>Meter Serial Number</Th>
              <Th>Consumer Name</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>11111</Td>
              <Td>User1</Td>
              <Td>Detail</Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>11111</Td>
              <Td>User1</Td>
              <Td>Detail</Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>11111</Td>
              <Td>User1</Td>
              <Td>Detail</Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>11111</Td>
              <Td>User1</Td>
              <Td>Detail</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default FieldEngineer;
