// components/PricingPage.js
import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";

const pricingTiers = [
  {
    title: "Basic",
    price: "$5/month",
    features: ["1 Website Hosting", "15GB SSD", "4GB RAM"],
  },
  {
    title: "Advance",
    price: "$20/month",
    features: ["5 Website Hosting", "100GB SSD", "24GB RAM "],
  },
  {
    title: "Pro",
    price: "$50/month",
    features: ["15 Website Hosting", "250GB SSD", "64GB RAM"],
  },
];

function PricingPage() {
  const { onAlertOpen } = useAlertContext();

  const handleBuyNowClick = () => {
    // Show success alert
    onAlertOpen({
      type: "success",
      message: "Your request has been sent!",
    });
  };

  return (
    <Box p={24} id="pricing-section" backgroundColor="#1976D2">
      <Heading as="h1" mb={9} color="#ffffff" textAlign="center">
        Pricing Plans
      </Heading>
      <Box
        display="grid"
        gridGap={6}
        gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
      >
        {pricingTiers.map((tier, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            p={6}
            backgroundColor="#ffffff"
          >
            <Heading as="h2" size="md" mb={2}>
              {tier.title}
            </Heading>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              {tier.price}
            </Text>
            <UnorderedList>
              {tier.features.map((feature, idx) => (
                <ListItem key={idx}>{feature}</ListItem>
              ))}
            </UnorderedList>
            <Button colorScheme="blue" onClick={handleBuyNowClick} mt={4}>
              Buy Now
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default PricingPage;
