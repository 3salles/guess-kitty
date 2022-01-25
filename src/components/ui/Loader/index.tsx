import { Center, VStack, Text } from "@chakra-ui/react";
import PacmanLoader from "react-spinners/PacmanLoader";

export const Loader = () => {
  return (
    <Center h="full"  as="section">
      <VStack spacing="24" align="center" justify="center">
        <Text ml="16" fontSize="2xl">Analisando...</Text>
        <PacmanLoader color="#D6BCFA" size={50}  />
      </VStack>
    </Center>
  );
};
