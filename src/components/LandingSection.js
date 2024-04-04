import React, { useState, useEffect } from "react";
import {
  VStack,
  Box,
  Input,
  InputGroup,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import FullScreenSection from "./FullScreenSection";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [domainName, setDomainName] = useState(""); // State to hold domain name input value
  const { onAlertOpen } = useAlertContext();

  const handleBuyNowClick = () => {
    // scroll to the pricing!
    window.scrollTo({
      top: window.innerHeight, // Adjust this value as needed
      behavior: "smooth",
    });
    // // Set loading state to true
    // setIsLoading(true);

    // // Simulate loading for 2 seconds
    // setTimeout(() => {
    //   // Set loading state to false
    //   setIsLoading(false);

    //   // Show alert
    //   onAlertOpen({
    //     type: "success",
    //     message: "Your order placed successfully!",
    //   });
    //   setDomainName("");
    //   onClose(); // Close the modal after successful order
    // }, 2000);
    onClose();
  };

  const checkAvailability = () => {
    // Validate domain name format
    if (!isValidDomainName(domainName)) {
      onAlertOpen({
        type: "error",
        message: "Please enter a valid domain name format.",
      });
      return;
    }

    // Set loading state to true
    setIsAvailable(true);

    // Simulate loading for 2 seconds
    setTimeout(() => {
      // Set loading state to false
      setIsAvailable(false);

      onOpen();
    }, 2000);
  };

  // Function to validate domain name format
  const isValidDomainName = (name) => {
    const domainRegex =
      /^(?!:\/\/)([a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]\.)+[a-zA-Z]{2,63}?$/;
    return domainRegex.test(name);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>The Domain is Available</ModalHeader>
          <ModalCloseButton />

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              leftIcon={<CheckIcon />}
              onClick={handleBuyNowClick}
              isLoading={isLoading} // Add isLoading prop
              loadingText="Placing Order..." // Optional loading text
            >
              Check Pricing
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <FullScreenSection
        id="pricing-section" // Add an ID to the pricing section
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
        <Box backgroundColor="rgba(0, 0, 0, 0.5)" p={8} rounded="md">
          <VStack spacing={4} alignItems="center">
            <InputGroup>
              <Input
                type="text"
                placeholder="Enter the domain you want.."
                w="75vw"
                value={domainName}
                onChange={(e) => setDomainName(e.target.value)} // Update domainName state on change
              />

              <Button
                backgroundColor="#1976D2"
                _hover="disable"
                ml={2}
                pl={7}
                pr={7}
                onClick={checkAvailability}
                isLoading={isAvailable} // Add isLoading prop
                loadingText="Checking Order..." // Optional loading text
              >
                Check Availability
              </Button>
            </InputGroup>
          </VStack>
        </Box>
      </FullScreenSection>
    </>
  );
};

export default LandingSection;
