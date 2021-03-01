import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";
import { Container, Warning } from "./_finishStyle";
import { APP_PATHS, APP_SESSION_STORAGE } from "../../constant";

const { QUESTIONS_PATH } = APP_PATHS;
const { QUIZ_SCORE } = APP_SESSION_STORAGE;

function Finish() {
  const history = useHistory();

  const quizScore = sessionStorage.getItem(QUIZ_SCORE);

  useEffect(() => {
    return () => {
      sessionStorage.removeItem(QUIZ_SCORE);
    };
  });

  const handleCobaLagiClick = () => {
    history.replace(QUESTIONS_PATH);
  };

  return (
    <Container>
      <h1>{quizScore >= 70 ? "Horee!" : "Waduuh"}</h1>
      {quizScore >= 70 ? (
        <Icon name="check circle" size="massive" color="green" />
      ) : (
        <Icon name="x" size="massive" color="red" />
      )}
      <h3>Kamu telah menyelesaikan Quiz Seputar Sumatera Utara</h3>
      <h3>Nilai: {quizScore}</h3>
      {quizScore < 70 && (
        <Warning>
          <h4>Kelihatannya nilai kamu tidak cukup bagus</h4>
          <Button primary onClick={handleCobaLagiClick} content="Coba Lagi" />
        </Warning>
      )}
    </Container>
  );
}

export default Finish;
