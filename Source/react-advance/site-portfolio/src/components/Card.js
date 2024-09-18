import { Box, Heading, HStack, Image, Text, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      maxW="sm"
      bg="white">

      <Image src={imageSrc} alt={title} />

      <Box p="6">
        <Heading color="gray.600" as="h3" size="md" mb="2">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
        <Link href="#" isExternal _hover={{ textDecoration: 'none' }}>
          <HStack mt="4" spacing="2">
            <Text color="black">Learn more</Text>
            <FontAwesomeIcon color="black" icon={faArrowRight} size="1x" />
          </HStack>
        </Link>
      </Box>
    </Box>
  );
};

export default Card;