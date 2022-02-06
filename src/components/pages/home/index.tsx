import { useKitty } from "../../../hooks/useKitty";
import { MainContent } from "./components/MainContent";
import { ResultSection } from "./components/ResultSection";

export const Home = () => {
  const { resultChecked} = useKitty();

  return (
    <>
      {resultChecked ? (
        <ResultSection  />
      ) : (
        <MainContent />
      )}
    </>
  );
};
