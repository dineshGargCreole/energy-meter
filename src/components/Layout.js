import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";

function Layout(props) {
  return (
    <Box>
      <Header />
      <Sidebar />
      <Content>{props.children}</Content>
    </Box>
  );
}

export default Layout;
