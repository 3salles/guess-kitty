import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { AppLayout } from "./layout/AppLayout"


export const App = () => (
  <ChakraProvider theme={theme}>
    <AppLayout>
      Content
    </AppLayout>
  </ChakraProvider>
)
