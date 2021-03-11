import { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Question from "../../components/question/index.jsx";
import { Container, Time, Navigation } from "./_questionsStyle";
import { questions, answers } from "./data";
import { logFbEvent } from "../../fb_event";
import { APP_PATHS, APP_SESSION_STORAGE } from "../../constant";

const { FINISH_PATH } = APP_PATHS;
const {
  USER_ANSWERS,
  USER_QUIZ_SCORE,
  USER_QUIZ_TIME,
  USER_QUIZ_REVIEW,
  QUIZ_TIME_PER_QUESTION,
  TIMER,
} = APP_SESSION_STORAGE;

function Questions() {
  const quizTimePerQuestion =
    sessionStorage.getItem(QUIZ_TIME_PER_QUESTION) || 30;
  const maxQuizTime = questions.length * quizTimePerQuestion * 1000;
  const _timer = sessionStorage.getItem(TIMER) || maxQuizTime;
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [time, setTime] = useState(_timer);
  const history = useHistory();

  let user_answers = sessionStorage.getItem(USER_ANSWERS);
  user_answers = user_answers ? JSON.parse(user_answers) : [];

  const submitAnswers = useCallback(() => {
    let _quizTime =
      time === 0 ? formatTime(maxQuizTime) : formatTime(maxQuizTime - time);
    let quizScore = 0;
    let reviewQuiz = [];
    user_answers.forEach((ans) => {
      const correctAnswer = answers.find(
        (correctAns) => correctAns.id === ans.id
      );
      if (ans.answer === correctAnswer.answer) {
        quizScore = quizScore + (1 / questions.length) * 100;
        reviewQuiz.push({
          question: questions.find((qs) => qs.id === ans.id).question,
          answer: ans.answer,
          status: true,
        });
      } else {
        reviewQuiz.push({
          question: questions.find((qs) => qs.id === ans.id).question,
          answer: ans.answer,
          status: false,
        });
      }
    });
    reviewQuiz = JSON.stringify(reviewQuiz);
    sessionStorage.setItem(USER_QUIZ_REVIEW, reviewQuiz);
    sessionStorage.setItem(USER_QUIZ_SCORE, quizScore);
    sessionStorage.setItem(USER_QUIZ_TIME, _quizTime);
    sessionStorage.removeItem(USER_ANSWERS);
    sessionStorage.removeItem(TIMER);
    logFbEvent(`User quiz score - ${quizScore}`);
    logFbEvent(`User quiz time - ${_quizTime}`);
    history.replace(FINISH_PATH);
  }, [maxQuizTime, time, user_answers, history]);

  useEffect(() => {
    if (time === 0) {
      logFbEvent("Habis waktu Redirect");
      submitAnswers();
      return;
    }
    const timeout = setTimeout(() => {
      sessionStorage.setItem(TIMER, time);
      setTime((prevState) => prevState - 1000);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [time, submitAnswers]);

  useEffect(() => {
    const foundAnswer = user_answers.find(
      (ans) => ans.id === questionNumber + 1
    );
    if (foundAnswer) {
      setSelectedAnswer(foundAnswer.answer);
    }
  }, [user_answers, questionNumber]);

  const handleSelectAnswer = (answer, questionID) => {
    setSelectedAnswer(answer);
    let answer_detail = {
      id: questionID,
      answer,
    };
    const existAnswer = user_answers.find((ans) => ans.id === questionID);
    if (!existAnswer) {
      user_answers.push(answer_detail);
    }
    const updated_user_answer = user_answers.map((ans) => {
      if (ans.id === questionID) {
        return answer_detail;
      }
      return ans;
    });
    sessionStorage.setItem(USER_ANSWERS, JSON.stringify(updated_user_answer));
  };

  const handleKembaliClick = () => {
    logFbEvent("Kembali button clicked");
    setQuestionNumber((prevState) => prevState - 1);
  };

  const handleLanjutClick = () => {
    if (questionNumber < questions.length - 1) {
      logFbEvent(`Lanjut button ${questionNumber + 1} clicked`);
      setQuestionNumber((prevState) => prevState + 1);
      setSelectedAnswer("");
    } else {
      logFbEvent("Selesai button clicked");
      submitAnswers();
    }
  };

  const formatTime = (time) => {
    let timeText = "";
    let seconds = time / 1000;
    let minutes = 0;
    if (seconds >= 60) {
      minutes = Math.floor(seconds / 60);
      seconds = seconds % 60;
      timeText = `${minutes} menit ${seconds} detik`;
      return timeText;
    }
    timeText = `${seconds} detik`;
    return timeText;
  };

  return (
    <Container>
      <Time>
        Sisa waktu: <span>{formatTime(time)}</span>
      </Time>
      <Question
        {...questions[questionNumber]}
        selectedAnswer={selectedAnswer}
        onSelectedAnswer={handleSelectAnswer}
      />
      <Navigation>
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
          content={questionNumber < questions.length - 1 ? "Lanjut" : "Selesai"}
        />
      </Navigation>
    </Container>
  );
}

export default Questions;
