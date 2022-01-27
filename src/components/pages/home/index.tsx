import { useState } from "react";
import { MainContent } from "./components/MainContent";
import { ResultSection } from "./components/ResultSection";

export const Home = () => {
  const isCat = false;
  const [resultChecked, setResultChecked] = useState(true);

  return (
    <>
      {resultChecked ? (
        <ResultSection isCat={isCat}  setResultChecked={setResultChecked}/>
      ) : (
        <MainContent />
      )}
    </>
  );
};
