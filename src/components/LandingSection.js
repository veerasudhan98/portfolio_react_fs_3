import React from "react";
import {
  VStack,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import FullScreenSection from "./FullScreenSection";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundImage={require("../images/photo3.jpg")}
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    backgroundAttachment="fixed"
    width="100%"
    maxWidth="100%"
  >
    <Box
      backgroundColor="rgba(0, 0, 0, 0.5)"
      p={8}
      rounded="md"
      // marginTop="-300px"
    >
      <VStack spacing={4} alignItems="center">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<AiOutlineSearch color="gray.300" />}
          />
          <Input
            type="text"
            placeholder="Enter the domain you want.."
            w="75vw"
          />

          <Button
            backgroundColor="#1976D2"
            _hover="disable"
            ml={2}
            pl={7}
            pr={7}
          >
            Search Domain
          </Button>
        </InputGroup>
      </VStack>
    </Box>
  </FullScreenSection>
);

export default LandingSection;
