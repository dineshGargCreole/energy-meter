import { Box } from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

function Header() {
  return (
    <Box
      backgroundColor={"#e8e8e8"}
      fontSize={"20px"}
      width={"100%"}
      color={"#000"}
      padding={"15px"}
      paddingLeft={"270px"}
    >
      <HamburgerIcon />
    </Box>
  );
}

export default Header;
