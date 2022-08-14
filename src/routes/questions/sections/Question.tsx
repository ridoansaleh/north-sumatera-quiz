import { memo } from "react";
// import { Image } from "semantic-ui-react";
import { Container, QuestionWrapper, Answers, Option } from "./_questionStyle";
import { IQuestionUI } from "../../../types";

type QuestionProps = {
  questionDetail: IQuestionUI;
  selectedAnswer: string;
  onSelectedAnswer: (value: string) => void;
};

function Question({
  questionDetail,
  selectedAnswer,
  onSelectedAnswer,
}: QuestionProps) {
  const { number, image, image_source, question, answers } = questionDetail;
  return (
    <Container>
      <QuestionWrapper>
        <span>{`${number})`}</span>
        <span>{question}</span>
      </QuestionWrapper>
      <img src={image} alt={`Sumber gambar ${image_source}`} />
      <Answers>
        {answers.map((answer, idx) => (
          <Option
            key={idx}
            isSelected={selectedAnswer === answer}
            onClick={() => onSelectedAnswer(answer)}
          >
            {answer}
          </Option>
        ))}
      </Answers>
    </Container>
  );
}

export default memo(Question);
