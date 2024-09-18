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
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      type: Yup.string()
        .oneOf(["hireMe", "openSource", "other"],
          "Invalid type of enquiry"
        )
        .required("Required"),
      comment: Yup.string()
        .max(500, 'Must be 500 characters or less')
        .required("Required"),
    }),
    onSubmit: async (values) => {
      await submit("/api/submit", values);

      if (response.type === "success")  {
        onOpen("success", response.message)
        formik.resetForm();
      }
      else
      {
        onOpen("error", response.message)
      }
    },
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}>

      <VStack w="1024px" p={32} alignItems="flex-start">
        
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>

              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="John Doe"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                ) : null}
              </FormControl>

              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john_doe@email.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                ) : null}
              </FormControl>

              <FormControl isInvalid={formik.touched.type && formik.errors.type}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select 
                  id="type" 
                  name="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  >
                  <option style={{ color: "black" }} value="selectType">Select Type</option>
                  <option style={{ color: "black" }} value="hireMe">Freelance project proposal</option>
                  <option style={{ color: "black" }} value="openSource">Open source consultancy session</option>
                  <option style={{ color: "black" }} value="other">Other</option>
                </Select>
                {formik.touched.type && formik.errors.type ? (
                  <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
                ) : null}
              </FormControl>

              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  placeholder="Your message here"
                  height={250}
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.comment && formik.errors.comment ? (
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                ) : null}
              </FormControl>

              <Button type="submit" isLoading={isLoading} colorScheme="purple" width="full">
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