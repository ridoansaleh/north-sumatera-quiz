import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";
import { Container, Warning } from "./_finishStyle";
import {
  APP_PATHS,
  APP_SESSION_STORAGE,
  MIN_PASS_QUIZ_SCORE,
} from "../../constant";

const { QUESTIONS_PATH } = APP_PATHS;
const { QUIZ_SCORE, QUIZ_TIME, TIMER } = APP_SESSION_STORAGE;

function Finish() {
  const history = useHistory();

  const quizScore = sessionStorage.getItem(QUIZ_SCORE);
  const quizTime = sessionStorage.getItem(QUIZ_TIME);

  useEffect(() => {
    return () => {
      sessionStorage.removeItem(TIMER);
      sessionStorage.removeItem(QUIZ_SCORE);
    };
  });

  const handleCobaLagiClick = () => {
    window.FB.AppEvents.logEvent("Coba Lagi button clicked");
    history.replace(QUESTIONS_PATH);
  };

  return (
    <Container>
      <h1>{quizScore >= MIN_PASS_QUIZ_SCORE ? "Horee!" : "Waduuh"}</h1>
      {quizScore >= MIN_PASS_QUIZ_SCORE ? (
        <Icon name="check circle" size="massive" color="green" />
      ) : (
        <Icon name="x" size="massive" color="red" />
      )}
      <h3>Kamu telah menyelesaikan Kuis Seputar Sumatera Utara</h3>
      <h3>Nilai: {quizScore}</h3>
      <h3>Waktu: {quizTime}</h3>
      {quizScore < MIN_PASS_QUIZ_SCORE && (
        <Warning>
          <h4>Kelihatannya nilai kamu tidak cukup bagus</h4>
          <Button primary onClick={handleCobaLagiClick} content="Coba Lagi" />
        </Warning>
      )}
    </Container>
  );
}

export default Finish;
