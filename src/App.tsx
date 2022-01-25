import * as React from "react";
import "@fontsource/open-sans";
import "@fontsource/merienda";

import { ChakraProvider } from "@chakra-ui/react";
import { AppLayout } from "./layout/AppLayout";
import theme from "./styles/theme";
import { Home } from "./components/pages/home";
import { Loader } from "./components/ui/Loader";



export const App = () => {
  const isLoading = false;

  return (
    <ChakraProvider theme={theme}>
    <AppLayout>
      {isLoading ? <Loader /> : <Home />}
    </AppLayout>
  </ChakraProvider>
  )
};
