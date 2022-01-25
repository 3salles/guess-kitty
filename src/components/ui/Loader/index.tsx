import { Center, VStack, Text, Image } from "@chakra-ui/react";
import ReactAudioPlayer from "react-audio-player";

export const Loader = () => {
  return (
    <Center h="full" as="section">
      <VStack spacing="16" align="center" justify="center">
        <Text fontSize="2xl">Analisando...</Text>
        <Image
          w={500}
          src="https://gist.github.com/brudnak/aba00c9a1c92d226f68e8ad8ba1e0a40/raw/e1e4a92f6072d15014f19aa8903d24a1ac0c41a4/nyan-cat.gif"
          alt="Nyan Cat"
        />
        <ReactAudioPlayer
          volume={0.25}
          src="https://www.nyan.cat/music/original.mp3"
          autoPlay
          controls
        />
      </VStack>
    </Center>
  );
};
