import { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Question from "./sections/Question.jsx";
import { Container, Time, Navigation } from "./styles/_questionsStyle";
import { logFbEvent } from "../../fb_event";
import { formatTime } from "./utils";
import { answers, generateQuestions } from "./data";
import { APP_PATHS, APP_SESSION_STORAGE } from "../../constant";

const { FINISH_PATH } = APP_PATHS;
const {
  USER_ANSWERS,
  USER_QUIZ_SCORE,
  USER_QUIZ_TIME,
  USER_QUIZ_REVIEW,
  QUIZ_TIME_PER_QUESTION,
  QUIZ_QUESTIONS,
  QUESTION_NUMBER,
  TIMER,
} = APP_SESSION_STORAGE;

let existingQuestions = sessionStorage.getItem(QUIZ_QUESTIONS);
existingQuestions = existingQuestions ? JSON.parse(existingQuestions) : null;

let questions = existingQuestions || generateQuestions();

questions = questions.map((qn, index) => ({
  number: index + 1,
  ...qn,
}));

sessionStorage.setItem(QUIZ_QUESTIONS, JSON.stringify(questions));

const _questionNumber = sessionStorage.getItem(QUESTION_NUMBER) || 0;

function Questions() {
  const quizTimePerQuestion =
    sessionStorage.getItem(QUIZ_TIME_PER_QUESTION) || 30;
  const maxQuizTime = questions.length * quizTimePerQuestion * 1000;
  const _timer = sessionStorage.getItem(TIMER) || maxQuizTime;

  const [questionNumber, setQuestionNumber] = useState(_questionNumber);
  const [activeQuestion, setActiveQuestion] = useState(
    questions[_questionNumber]
  );
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [time, setTime] = useState(_timer);
  const history = useHistory();

  let user_answers = sessionStorage.getItem(USER_ANSWERS);
  user_answers = user_answers ? JSON.parse(user_answers) : [];

  const submitAnswers = useCallback(() => {
    let quizTime =
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
    sessionStorage.setItem(USER_QUIZ_TIME, quizTime);
    sessionStorage.removeItem(USER_ANSWERS);
    sessionStorage.removeItem(TIMER);
    sessionStorage.removeItem(QUIZ_QUESTIONS);
    sessionStorage.removeItem(QUESTION_NUMBER);
    logFbEvent(`User quiz score - ${quizScore}`);
    logFbEvent(`User quiz time - ${quizTime}`);
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
      (ans) => ans.id === activeQuestion.id
    );
    if (foundAnswer) {
      setSelectedAnswer(foundAnswer.answer);
    } else {
      setSelectedAnswer("");
    }
  }, [user_answers, activeQuestion]);

  useEffect(() => {
    sessionStorage.setItem(QUESTION_NUMBER, questionNumber);
    setActiveQuestion(questions[questionNumber]);
  }, [questionNumber]);

  const handleSelectAnswer = useCallback(
    (answer, questionID) => {
      let answer_detail = {
        id: questionID,
        answer,
      };
      const isAnswerExist = user_answers.find((ans) => ans.id === questionID);
      if (!isAnswerExist) {
        user_answers.push(answer_detail);
      }
      const updated_user_answer = user_answers.map((ans) => {
        if (ans.id === questionID) {
          return answer_detail;
        }
        return ans;
      });
      sessionStorage.setItem(USER_ANSWERS, JSON.stringify(updated_user_answer));
      setSelectedAnswer(answer);
    },
    [user_answers]
  );

  const handleKembaliClick = () => {
    logFbEvent("Kembali button clicked");
    setQuestionNumber((prevState) => prevState - 1);
  };

  const handleLanjutClick = () => {
    if (questionNumber < questions.length - 1) {
      logFbEvent(`Lanjut button ${questionNumber + 1} clicked`);
      setQuestionNumber((prevState) => prevState + 1);
    } else {
      logFbEvent("Selesai button clicked");
      submitAnswers();
    }
  };

  return (
    <Container>
      <Time>
        Sisa waktu: <span>{formatTime(time)}</span>
      </Time>
      <Question
        questionDetail={activeQuestion}
        selectedAnswer={selectedAnswer}
        onSelectedAnswer={handleSelectAnswer}
      />
      <Navigation isSticky={selectedAnswer !== ""}>
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
