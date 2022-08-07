import { memo, useMemo } from "react";
import { Button } from "semantic-ui-react";
import { Container } from "./_navigationStyle";

function Navigation({
  totalQuestion,
  selectedAnswer,
  questionNumber,
  onSetQuestionNumber,
  onSubmitAnswers,
}) {
  const handleBackClick = () => {
    onSetQuestionNumber((prevState) => prevState - 1);
  };

  const handleNextClick = () => {
    if (questionNumber < totalQuestion - 1) {
      onSetQuestionNumber((prevState) => prevState + 1);
    } else {
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
          onClick={handleBackClick}
          content="Kembali"
        />
      )}
      <Button
        primary
        disabled={selectedAnswer === ""}
        onClick={handleNextClick}
        content={nextButtonLabel}
      />
    </Container>
  );
}

export default memo(Navigation);
