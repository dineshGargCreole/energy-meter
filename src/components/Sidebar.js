import { Box, Text, VStack } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import React from "react";

function Sidebar() {
  const { role } = useParams();

  return (
    <Box
      backgroundColor={"#2477bf"}
      width={"250px"}
      height={"100vh"}
      color={"#fff"}
      position={"fixed"}
      left={0}
      top={0}
    >
      <Text fontSize="2xl" padding={"30px"} textAlign={"center"}>
        LOGO
      </Text>
      <VStack spacing={3}>
        <Text fontSize="md" textAlign={"center"}>
          <Link to={`/${role}`}>Home</Link>
        </Text>
        {role === "fe" && (
          <Text fontSize="md" textAlign={"center"}>
            <Link to={`capture`}>Capture Energy Reading</Link>
          </Text>
        )}
      </VStack>
    </Box>
  );
}

export default Sidebar;
