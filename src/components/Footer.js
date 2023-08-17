import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box backgroundColor="#1976D2">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Group 7 - Ricardo, Shi He, Veerasudhan • © 2023</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
