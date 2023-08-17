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

const pricingTiers = [
  {
    title: "Basic",
    price: "$10/month",
    features: ["5 projects", "Limited features", "Basic support"],
  },
  {
    title: "Standard",
    price: "$25/month",
    features: ["Unlimited projects", "Priority support", "Custom domain"],
  },
  {
    title: "Premium",
    price: "$50/month",
    features: ["All standard features", "Advanced analytics", "24/7 support"],
  },
];

function PricingPage() {
  return (
    <Box p={24} id="pricing-section">
      <Heading as="h1" mb={6}>
        Pricing Plans
      </Heading>
      <Box
        display="grid"
        gridGap={6}
        gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
      >
        {pricingTiers.map((tier, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" p={6}>
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
            <Button colorScheme="blue" mt={4}>
              Select
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default PricingPage;
