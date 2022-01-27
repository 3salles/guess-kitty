import { ConfirmSection } from "../confirm";
import { NotCatSection } from "../NotCatSection";

interface ResultSectionProps {
  isCat: boolean;
  setResultChecked: (status: boolean) => void;
}

export const ResultSection = ({
  isCat,
  setResultChecked,
}: ResultSectionProps) => {
  return (
    <>
      {isCat ? (
        <ConfirmSection setResultChecked={setResultChecked} />
      ) : (
        <NotCatSection setResultChecked={setResultChecked} />
      )}
    </>
  );
};
