import { Box, Button, Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Center h="full" as="section" p="8">
      <VStack spacing="28">
        <Heading as="header" textAlign="center" fontSize="2xl">
          Acho que vi um gatinho!
        </Heading>
        <Box h="full" as="article" mt="4" fontSize="2xl">
          <Text>Para confirmar, envie uma foto</Text>
        </Box>
        <Button colorScheme="purple" color="white">
          Enviar foto
        </Button>
      </VStack>
    </Center>
  );
};
