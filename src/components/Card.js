import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Box,
  Link,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  console.log("img", imageSrc);
  return (
    <Box
      bg="white"
      borderRadius="md"
      boxShadow="lg"
      p={8}
      position="relative"
      overflow="hidden"
      transition="transform 0.3s"
      _hover={{
        transform: "translateY(-5px)",
      }}
    >
      <Image src={imageSrc} alt={title} objectFit="cover" mb={4} />
      <VStack spacing={2}>
        <Heading as="h3" size="md" color="gray.700">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
      </VStack>
      <Link
        position="absolute"
        bottom="0"
        right="0"
        p={5}
        display="flex"
        alignItems="center"
        color="blue.500"
        _hover={{ color: "blue.700" }}
      >
        Learn More
        <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "5px" }} />
      </Link>
    </Box>
  );
};

export default Card;
