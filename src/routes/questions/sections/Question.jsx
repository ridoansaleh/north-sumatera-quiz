import { memo } from "react";
import { Image } from "semantic-ui-react";
import {
  Container,
  QuestionWrapper,
  Answers,
  Option,
} from "./_questionStyle";

function Question({ questionDetail, selectedAnswer, onSelectedAnswer }) {
  const { number, image, image_source, question, answers } = questionDetail;
  return (
    <Container>
      <Image src={image} alt={`Sumber gambar ${image_source}`} />
      <QuestionWrapper>
        <span>{`${number})`}</span>
        <span>{question}</span>
      </QuestionWrapper>
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
