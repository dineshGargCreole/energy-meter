import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };
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
      <Button onClick={handleLogout} float="right">
        Logout
      </Button>
    </Box>
  );
}

export default Header;
