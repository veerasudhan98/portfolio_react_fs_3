import React from "react";
import { Avatar, Heading, VStack, AvatarGroup, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { AiOutlineUser } from "react-icons/ai";

const greeting = "Hello, I am Veerasudhan!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    // backgroundColor="#2A4365"
    // Add background image and parallax effect
    backgroundImage={require("../images/hero_2.jpg")} // Replace with actual image URL
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    backgroundAttachment="fixed"
    width="100%"
    maxWidth="100%" // Set maxWidth to "0" or "auto" to remove the constraint
  >
    <Box
      // Add a semi-transparent overlay to make text more readable
      backgroundColor="rgba(0, 0, 0, 0.5)"
      p={8}
      rounded="md"
    >
      <VStack spacing={4} alignItems="center">
        {/* <Avatar size="xl" name="Pete" src="https://via.placeholder.com/150" /> */}
        <AvatarGroup spacing="1rem">
          <Avatar bg="red.500" icon={<AiOutlineUser fontSize="1.5rem" />} />
        </AvatarGroup>
        <Heading as="h1" size="xl" color="white">
          {greeting}
        </Heading>
        <Heading as="h2" size="md" color="white">
          {bio1}
        </Heading>
        <Heading as="h2" size="md" color="white">
          {bio2}
        </Heading>
      </VStack>
    </Box>
  </FullScreenSection>
);

export default LandingSection;
