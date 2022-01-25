import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Heading bg="purple.200" p="2">
      <Flex align="center" justify="center">
        <Image
          src="https://img.icons8.com/external-tulpahn-flat-tulpahn/64/000000/external-happy-cat-emoji-tulpahn-flat-tulpahn.png"
          alt="Gatinho"
        />
        <Text ml="4">Gatinho!</Text>
      </Flex>
    </Heading>
  );
};
