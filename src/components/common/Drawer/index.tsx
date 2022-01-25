import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";
import { TabList } from "./components/TabList";


interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Drawer = ({ isOpen, onClose }: DrawerProps) => {
  return (
    <ChakraDrawer isOpen={isOpen} placement="right" onClose={onClose} size="md" >
      <DrawerOverlay />
      <DrawerContent bg="purple.400">
        <DrawerCloseButton />
        <DrawerHeader>Escolha forma de envio</DrawerHeader>

        <DrawerBody>
          <TabList />
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" colorScheme="white" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button colorScheme="pink" color="white">
            Enviar
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </ChakraDrawer>
  );
};
