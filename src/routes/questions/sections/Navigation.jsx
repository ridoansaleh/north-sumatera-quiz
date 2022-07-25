import { memo, useMemo } from "react";
import { Button } from "semantic-ui-react";
import { Navigation as Container } from "../styles/_questionsStyle";
import { logFbEvent } from "../../../fbEvent";

function Navigation({
  totalQuestion,
  selectedAnswer,
  questionNumber,
  onSetQuestionNumber,
  onSubmitAnswers,
}) {
  const handleKembaliClick = () => {
    logFbEvent("Kembali button clicked");
    onSetQuestionNumber((prevState) => prevState - 1);
  };

  const handleLanjutClick = () => {
    if (questionNumber < totalQuestion - 1) {
      logFbEvent(`Lanjut button ${questionNumber + 1} clicked`);
      onSetQuestionNumber((prevState) => prevState + 1);
    } else {
      logFbEvent("Selesai button clicked");
      onSubmitAnswers();
    }
  };

  const nextButtonLabel = useMemo(
    () => (questionNumber < totalQuestion - 1 ? "Lanjut" : "Selesai"),
    [questionNumber, totalQuestion]
  );

  return (
    <Container isSticky={selectedAnswer !== ""}>
      {questionNumber > 0 && (
        <Button
          className="kembali-btn"
          onClick={handleKembaliClick}
          content="Kembali"
        />
      )}
      <Button
        primary
        disabled={selectedAnswer === ""}
        onClick={handleLanjutClick}
        content={nextButtonLabel}
      />
    </Container>
  );
}

export default memo(Navigation);
