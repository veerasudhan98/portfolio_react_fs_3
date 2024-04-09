import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onAlertOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hosting",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const res = await submit(values);
        console.log("response here", response, res);
        // Handle the response here (e.g., show a success alert)
        onAlertOpen({
          type: "success",
          message: `Thanks for your submission, we will get back to you shortly!`,
        });
        // Reset form after successful submission
        formik.resetForm();
      } catch (error) {
        // Handle submission error (e.g., show an error alert)
        onAlertOpen({
          type: "error",
          message: "Error submitting form. Please try again.",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  // Responsive adjustments for form layout
  const formWidth = useBreakpointValue({
    base: "100%",
    md: "600px",
    lg: "800px",
  });
  const formSpacing = useBreakpointValue({ base: 2, md: 4 });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#18181b"
      py={16}
      spacing={8}
    >
      <VStack w="100%" p={[8, 16]} alignItems="center" id="contactme-section">
        <Heading as="h1">Contact me</Heading>
        <Box p={6} rounded="md" w={formWidth}>
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={formSpacing}>
              <FormControl isInvalid={formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.type}
                >
                  <option value="hosting">Hosting Services</option>
                  <option value="pricing">Pricing queries</option>
                  <option value="support">Support</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.comment}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                // colorScheme="purple"
                backgroundColor="#1976D2"
                width="full"
                isLoading={isLoading}
                disabled={isLoading}
                mt={formSpacing}
                _hover="disable"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
