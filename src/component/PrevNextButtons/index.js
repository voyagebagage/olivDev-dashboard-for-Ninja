import { Button } from "semantic-ui-react";
import { useFetch } from "../../context/Provider";

const PrevNextButtons = ({ nextNextToken, previousTokens, isLoading }) => {
  const { nextToken, setNextNextToken, setPreviousTokens, setNextToken } =
    useFetch();
  //----------------------
  const hasNext = !!nextNextToken;
  const hasPrev = previousTokens.length;
  //----------------------
  const disabledNext = !hasNext || isLoading;
  const disabledPrev = !hasPrev || isLoading;
  //----------------------

  const next = () => {
    setPreviousTokens((prev) => [...prev, nextToken]);
    setNextToken(nextNextToken);
    setNextNextToken(null);
  };
  //-----------------------
  const prev = () => {
    setNextToken(previousTokens.pop());
    setPreviousTokens([...previousTokens]);
    setNextNextToken(null);
  };
  //------------------------
  return (
    <>
      <Button content="Previous" disabled={disabledPrev} onClick={prev} />
      <Button
        content="Next"
        disabled={disabledNext}
        style={{ minWidth: "8%" }}
        onClick={next}
      />
    </>
  );
};

export default PrevNextButtons;
