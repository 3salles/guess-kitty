import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({children}: AppLayoutProps) => {
  return (
    <Box h="100vh" bgGradient="linear(to right, #B993D6, #8CA6DB)">
      <Flex flexDir="column">
        <Header />
        {children}
        <Footer />
      </Flex>
      </Box>
  );
};
