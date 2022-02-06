import * as React from "react";
import "@fontsource/open-sans";
import "@fontsource/merienda";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";

import { KittyProvider } from "./hooks/useKitty";
import { Main } from "./components/pages/main";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <KittyProvider>
        <Main />
      </KittyProvider>
    </ChakraProvider>
  );
};
