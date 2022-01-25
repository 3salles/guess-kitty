import { Box, Link, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      w="100%"
      as="footer"
      textAlign="center"
      pos="fixed"
      bottom="0"
      p="4"
      bg="purple.200"
    >
      <Text>
        Desenvolvido por {""}
        <Link href="https://github.com/3salles" target="_blank">
          Beatriz Salles{" "}
        </Link>
        e {""}
        <Link href="https://github.com/DarkCleopas" target="_blank">
          Lucas Cleópas
        </Link>
      </Text>
    </Box>
  );
};
