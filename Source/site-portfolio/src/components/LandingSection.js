import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365">

    <VStack spacing={10}>
      <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size="10xl" />
      <Heading as="h1">
        John Smith
      </Heading>
      <Text fontSize='3xl'>Experienced software developer with a passion for front-end development and UX design. Skilled in modern web technologies, creating responsive and user-friendly applications with a focus on performance.</Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;