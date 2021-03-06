import { useHistory } from "react-router-dom";
import { Icon, Button } from "semantic-ui-react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import {
  Container,
  Warning,
  UserStats,
  ShareContainer,
  SocialIconWrapper,
} from "./_finishStyle";
import { logFbEvent } from "../../fb_event";
import session from "../../session_storage";
import {
  APP_PATHS,
  APP_SESSION_STORAGE,
  MIN_PASS_QUIZ_SCORE,
} from "../../constant";

const { QUESTIONS_PATH, REVIEW_PATH } = APP_PATHS;
const {
  USER_QUIZ_SCORE,
  USER_QUIZ_TIME,
  USER_QUIZ_REVIEW,
  USER_QUIZ_LEVEL,
  TIMER,
} = APP_SESSION_STORAGE;

function Finish() {
  const history = useHistory();

  const quizScore = session.get(USER_QUIZ_SCORE, 0);
  const quizTime = session.get(USER_QUIZ_TIME, " - ");
  const quizLevel = session.get(USER_QUIZ_LEVEL, " - ");

  const handleCobaLagiClick = () => {
    session.remove(TIMER);
    session.remove(USER_QUIZ_SCORE);
    session.remove(USER_QUIZ_REVIEW);
    logFbEvent("Coba Lagi button clicked");
    history.replace(QUESTIONS_PATH);
  };

  const handleLihatReviewClick = () => {
    logFbEvent("Lihat review button clicked");
    history.push(REVIEW_PATH);
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
      <UserStats>
        <div>Nilai: {quizScore}</div>
        <div>Waktu: {quizTime}</div>
        <div>Level: {quizLevel}</div>
      </UserStats>
      {quizScore > 0 && (
        <Button
          className="review-btn"
          color="grey"
          onClick={handleLihatReviewClick}
          content="Lihat Review"
        />
      )}
      {quizScore < MIN_PASS_QUIZ_SCORE ? (
        <Warning>
          <h4>Kelihatannya nilai kamu tidak cukup bagus</h4>
          <Button primary onClick={handleCobaLagiClick} content="Coba Lagi" />
        </Warning>
      ) : (
        <ShareContainer>
          <h4>Bagikan di:</h4>
          <SocialIconWrapper>
            <FacebookShareButton
              quote={`Saya baru saja memperoleh nilai ${quizScore} dengan mengerjakan kuis Sumut dalam waktu ${quizTime}.`}
              hashtag="#kuis"
              url="https://kuis-sumut.netlify.app"
            >
              <FacebookIcon size={32} />
            </FacebookShareButton>
            <TwitterShareButton
              title={`Saya baru saja memperoleh nilai ${quizScore} dengan mengerjakan kuis Sumut dalam waktu ${quizTime}.`}
              hashtags={["kuis", "sumut", "sumatera", "utara", "senang"]}
              url="https://kuis-sumut.netlify.app"
            >
              <TwitterIcon size={32} />
            </TwitterShareButton>
            <WhatsappShareButton
              title={`Saya baru saja memperoleh nilai ${quizScore} dengan mengerjakan kuis Sumut dalam waktu ${quizTime}.`}
              url="https://kuis-sumut.netlify.app"
            >
              <WhatsappIcon size={32} />
            </WhatsappShareButton>
          </SocialIconWrapper>
        </ShareContainer>
      )}
    </Container>
  );
}

export default Finish;
