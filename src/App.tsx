import * as React from "react";
import "@fontsource/open-sans";
import "@fontsource/merienda";

import { ChakraProvider } from "@chakra-ui/react";
import { AppLayout } from "./layout/AppLayout";
import theme from "./styles/theme";
import { Home } from "./components/pages/home";
import { Loader } from "./components/ui/Loader";
import { KittyProvider } from "./hooks/useKitty";

export const App = () => {
  const isLoading = true;

  return (
    <ChakraProvider theme={theme}>
      <KittyProvider>
        <AppLayout>{isLoading ? <Loader /> : <Home />}</AppLayout>
      </KittyProvider>
    </ChakraProvider>
  );
};
