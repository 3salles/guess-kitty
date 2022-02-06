import { Box, Button, Center, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useKitty } from "../../../../../hooks/useKitty";


export const ResultSection = () => {
  const {cat, setResultChecked} = useKitty()

  return (
    <Center h="full" as="section" p="8">
      <VStack spacing="20">
        <Heading as="header" textAlign="center" fontSize="2xl">
          {cat?.isCat ? 'É um gatinho!!' : 'Não é um gato!'}
        </Heading>
        <Box h="full" as="article" mt="4" fontSize="2xl">
          <Image
            src={cat?.isCat ? 'https://acegif.com/wp-content/gifs/dancing-cat-25.gif' : "https://c.tenor.com/MnNStJ73QU0AAAAC/sunakook-sad.gif"}
            alt={cat?.isCat ? 'Gatinho feliz' : "Gatinho triste"}
            h={300}
          />
          <Text mt="2" fontSize="lg" textAlign="center">
            Tenho {cat?.score}% de certeza
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
