import { Box, Button, Center, Heading, Image, Text, VStack } from "@chakra-ui/react";

interface ConfirmSectionProps {
  setResultChecked: (status: boolean) => void;
}

export const ConfirmSection = ({ setResultChecked }: ConfirmSectionProps) => {
  return (
    <Center h="full" as="section" p="8">
      <VStack spacing="20">
        <Heading as="header" textAlign="center" fontSize="2xl">
          É um gatinho!!
        </Heading>
        <Box h="full" as="article" mt="4" fontSize="2xl">
          <Image
            src="https://acegif.com/wp-content/gifs/dancing-cat-25.gif"
            alt="Gatinho feliz"
          />
          <Text mt="2" fontSize="lg">Tenho 84% de certeza</Text>
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
