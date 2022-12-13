import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

function Sidebar() {
  return (
    <Box
      backgroundColor={"#43c4f2"}
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
          Home
        </Text>
        <Text fontSize="md" textAlign={"center"}>
          Capture Energy Reading
        </Text>
      </VStack>
    </Box>
  );
}

export default Sidebar;
