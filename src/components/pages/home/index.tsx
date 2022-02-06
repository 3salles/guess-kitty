import { useKitty } from "../../../hooks/useKitty";
import { MainContent } from "./components/MainContent";
import { ResultSection } from "./components/ResultSection";

export const Home = () => {
  const { isCat, resultChecked, setResultChecked } = useKitty();

  return (
    <>
      {resultChecked ? (
        <ResultSection isCat={isCat} setResultChecked={setResultChecked} />
      ) : (
        <MainContent />
      )}
    </>
  );
};
