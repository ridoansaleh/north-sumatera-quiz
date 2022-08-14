import { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { Accordion, Icon, Button } from "semantic-ui-react";
import { Container } from "./_reviewStyle";
import session from "../../sessionStorage";
import { APP_SESSION_STORAGE } from "../../constant";
import { IQuizReview } from '../../types'

const { USER_QUIZ_REVIEW } = APP_SESSION_STORAGE;

function Review() {
  const [activeIndex, setActiveIndex] = useState(0);
  const history = useHistory();

  let userQuizReview: IQuizReview[] = session.get(USER_QUIZ_REVIEW, []);

  const handleToggleAnswer = (index: number): void => {
    setActiveIndex(index);
  };

  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <Container>
      <h2>Review Hasil Kuis</h2>
      <Accordion fluid styled>
        {userQuizReview.map((quiz, index) => (
          <Fragment key={index}>
            <Accordion.Title
              active={activeIndex === index}
              index={index}
              onClick={() => handleToggleAnswer(index)}
            >
              <Icon name="dropdown" />
              {`${index + 1}. ${quiz.question}`}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === index}>
              <p className="answer">
                {quiz.status ? (
                  <Icon
                    name="check circle"
                    aria-label="Jawaban Benar"
                    size="small"
                    color="green"
                  />
                ) : (
                  <Icon
                    name="x"
                    aria-label="Jawaban Salah"
                    size="small"
                    color="red"
                  />
                )}{" "}
                Jawaban: {quiz.answer}
              </p>
            </Accordion.Content>
          </Fragment>
        ))}
      </Accordion>
      <Button primary onClick={handleBackClick}>
        Kembali
      </Button>
    </Container>
  );
}

export default Review;
