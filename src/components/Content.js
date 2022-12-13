import React from "react";
import { Box } from "@chakra-ui/react";

function Content(props) {
  return (
    <Box padding={"20px"} paddingLeft={"270px"}>
      {props.children}
    </Box>
  );
}

export default Content;
