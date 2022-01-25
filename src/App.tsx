import * as React from "react";
import "@fontsource/open-sans";
import "@fontsource/merienda";

import { ChakraProvider } from "@chakra-ui/react";
import { AppLayout } from "./layout/AppLayout";
import theme from "./styles/theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <AppLayout>Content</AppLayout>
  </ChakraProvider>
);
