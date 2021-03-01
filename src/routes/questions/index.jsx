import { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Question from "../../components/question/index.jsx";
import { Container, Time, Navigation } from "./_questionsStyle";
import { questions, answers } from "./data";
import { APP_PATHS, APP_SESSION_STORAGE } from "../../constant";

const { FINISH_PATH } = APP_PATHS;
const { USER_ANSWERS, QUIZ_SCORE, QUIZ_TIME, TIMER } = APP_SESSION_STORAGE;

function Questions() {
  const _timer = sessionStorage.getItem(TIMER) || questions.length * 30 * 1000;
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [time, setTime] = useState(_timer);
  const history = useHistory();

  let list_answer = sessionStorage.getItem(USER_ANSWERS);
  list_answer = list_answer ? JSON.parse(list_answer) : [];

  const submitAnswers = useCallback(() => {
    let _quizTime =
      time === 0
        ? formatTime(questions.length * 30 * 1000)
        : formatTime(questions.length * 30 * 1000 - time);
    let quizScore = 0;
    list_answer.forEach((ans) => {
      const correctAnswer = answers.find(
        (correctAns) => correctAns.id === ans.id
      );
      if (ans.answer === correctAnswer.answer) {
        quizScore = quizScore + (1 / questions.length) * 100;
      }
    });
    sessionStorage.setItem(QUIZ_SCORE, quizScore);
    sessionStorage.setItem(QUIZ_TIME, _quizTime);
    sessionStorage.removeItem(USER_ANSWERS);
    sessionStorage.removeItem(TIMER);
    history.replace(FINISH_PATH);
  }, [time, list_answer, history]);

  useEffect(() => {
    if (time === 0) {
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
    const foundAnswer = list_answer.find(
      (ans) => ans.id === questionNumber + 1
    );
    if (foundAnswer) {
      setSelectedAnswer(foundAnswer.answer);
    }
  }, [list_answer, questionNumber]);

  const handleSelectAnswer = (answer, questionID) => {
    setSelectedAnswer(answer);
    let answer_detail = {
      id: questionID,
      answer,
    };
    const existAnswer = list_answer.find((ans) => ans.id === questionID);
    if (!existAnswer) {
      list_answer.push(answer_detail);
    }
    const updated_list_answer = list_answer.map((ans) => {
      if (ans.id === questionID) {
        return answer_detail;
      }
      return ans;
    });
    sessionStorage.setItem(USER_ANSWERS, JSON.stringify(updated_list_answer));
  };

  const handleKembaliClick = () => {
    setQuestionNumber((prevState) => prevState - 1);
  };

  const handleLanjutClick = () => {
    if (questionNumber < questions.length - 1) {
      setQuestionNumber((prevState) => prevState + 1);
      setSelectedAnswer("");
    } else {
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
