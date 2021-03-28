import { memo, useMemo } from "react";
import { Button } from "semantic-ui-react";
import { Navigation as Container } from "../styles/_questionsStyle";
import { logFbEvent } from "../../../fb_event";

function Navigation({
  questions,
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
    if (questionNumber < questions.length - 1) {
      logFbEvent(`Lanjut button ${questionNumber + 1} clicked`);
      onSetQuestionNumber((prevState) => prevState + 1);
    } else {
      logFbEvent("Selesai button clicked");
      onSubmitAnswers();
    }
  };

  const nextButtonLabel = useMemo(
    () => (questionNumber < questions.length - 1 ? "Lanjut" : "Selesai"),
    [questionNumber, questions]
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
