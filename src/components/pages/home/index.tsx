import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { Drawer } from "../../common/Drawer";
import { ConfirmSection } from "./components/confirm";
import { MainContent } from "./components/MainContent";

export const Home = () => {
  const isCat = true;
  const [resultChecked, setResultChecked] = useState(true);

  return (
    <>
      {resultChecked ? (
        <ConfirmSection setResultChecked={setResultChecked} />
      ) : (
        <MainContent />
      )}
    </>
  );
};
