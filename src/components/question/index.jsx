import { memo } from "react";
import { Image } from "semantic-ui-react";
import { Container, Answers, Option } from "./_questionStyle";

function Question({ questionDetail, selectedAnswer, onSelectedAnswer }) {
  const { id, number, image, image_source, question, answers } = questionDetail;
  return (
    <Container>
      <Image src={image} alt={`Sumber gambar ${image_source}`} />
      <p>
        {number}) {question}
      </p>
      <Answers>
        <div>
          <Option
            isSelected={selectedAnswer === answers[0]}
            onClick={() => onSelectedAnswer(answers[0], id)}
          >
            a. {answers[0]}
          </Option>
          <Option
            isSelected={selectedAnswer === answers[1]}
            onClick={() => onSelectedAnswer(answers[1], id)}
          >
            b. {answers[1]}
          </Option>
        </div>
        <div>
          <Option
            isSelected={selectedAnswer === answers[2]}
            onClick={() => onSelectedAnswer(answers[2], id)}
          >
            c. {answers[2]}
          </Option>
          <Option
            isSelected={selectedAnswer === answers[3]}
            onClick={() => onSelectedAnswer(answers[3], id)}
          >
            d. {answers[3]}
          </Option>
        </div>
      </Answers>
    </Container>
  );
}

export default memo(Question);
