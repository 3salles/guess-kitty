import {
  Box,
  Button,
  Center,
  Heading,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Drawer } from "../../../../common/Drawer";



export const MainContent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Center h="full" as="section" p="8">
        <VStack spacing="28">
          <Heading as="header" textAlign="center" fontSize="2xl">
            Acho que vi um gatinho!
          </Heading>
          <Box h="full" as="article" mt="4" fontSize="2xl">
            <Text>Para confirmar, envie uma foto</Text>
          </Box>
          <Button colorScheme="purple" color="white" onClick={onOpen}>
            Enviar foto
          </Button>
        </VStack>
      </Center>
      <Drawer isOpen={isOpen} onClose={onClose} />
    </>
  );
}