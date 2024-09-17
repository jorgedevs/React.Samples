import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365">

    <VStack spacing={8}>
      <Avatar size='2xl' name='Christian Nwamba' src='https://bit.ly/code-beast' />
      <Heading as='h2' size='md'>{greeting}</Heading>

      <VStack spacing={5}>
        <Heading as="h3">{bio1}</Heading>
        <Heading as="h3">{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;