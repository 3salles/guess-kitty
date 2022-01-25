import { Button, Text } from "@chakra-ui/react";

interface InitialContentProps {
  setShowCamera: (param: boolean) => void;
}

export const InitialContent = ({ setShowCamera }: InitialContentProps) => {
  return (
    <>
      <Text>Tire uma foto neste instante!</Text>
      <Button
        colorScheme="purple"
        color="white"
        onClick={() => {
          setShowCamera(true);
        }}
      >
        Tirar foto
      </Button>
    </>
  );
};
