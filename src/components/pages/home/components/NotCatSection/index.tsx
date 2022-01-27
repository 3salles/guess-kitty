import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

interface NotCatSectionProps {
  setResultChecked: (status: boolean) => void;
}

export const NotCatSection = ({ setResultChecked }: NotCatSectionProps) => {
  return (
    <Center h="full" as="section" p="8">
      <VStack spacing="20">
        <Heading as="header" textAlign="center" fontSize="2xl">
          Não é um gato!
        </Heading>
        <Box h="full" as="article" mt="4" fontSize="2xl">
          <Image
            src="https://c.tenor.com/MnNStJ73QU0AAAAC/sunakook-sad.gif"
            alt="Gatinho triste"
            h={300}
          />
          <Text mt="2" fontSize="lg" textAlign="center">
            Tenho 84% de certeza
          </Text>
        </Box>
        <Button
          colorScheme="purple"
          color="white"
          onClick={() => setResultChecked(false)}
        >
          Tentar novamente
        </Button>
      </VStack>
    </Center>
  );
};
