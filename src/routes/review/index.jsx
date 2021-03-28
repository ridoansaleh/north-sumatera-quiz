import { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { Accordion, Icon, Button } from "semantic-ui-react";
import { Container } from "./_reviewStyle";
import { logFbEvent } from "../../fb_event";
import session from "../../session_storage";
import { APP_SESSION_STORAGE } from "../../constant";

const { USER_QUIZ_REVIEW } = APP_SESSION_STORAGE;

function Review() {
  const [activeIndex, setActiveIndex] = useState(0);
  const history = useHistory();

  let userQuizReview = session.get(USER_QUIZ_REVIEW, []);

  const handleToggleAnswer = (index) => {
    logFbEvent(`Answer of question number ${index + 1} was toggled`);
    setActiveIndex(index);
  };

  const handleBackClick = () => {
    logFbEvent("Review back button clicked");
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
