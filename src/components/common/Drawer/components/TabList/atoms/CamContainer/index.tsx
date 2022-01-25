import { Button, Center, Image, Text, VStack } from "@chakra-ui/react";
import {  useState } from "react";

import { CameraSection } from "./components/CameraSection";
import { InitialContent } from "./components/InitialContent";


export const CamContent = () => {
  const [showCamera, setShowCamera] = useState(false);

  return (
    <Center mt="8">
      <VStack spacing="8">
        {showCamera ? (
          <CameraSection  />
        ) : (
          <InitialContent setShowCamera={setShowCamera} />
        )}
      </VStack>
    </Center>
  );
};

