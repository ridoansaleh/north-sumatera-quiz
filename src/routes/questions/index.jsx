import { useState, useEffect, useCallback, useMemo } from "react";
import { useHistory } from "react-router-dom";
import Question from "./sections/Question.jsx";
import Navigation from "./sections/Navigation.jsx";
import { Container, Time } from "./styles/_questionsStyle";
import { logFbEvent } from "../../fb_event";
import session from "../../session_storage";
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

let questions = session.get(QUIZ_QUESTIONS, generateQuestions());

questions = questions.map((qn, index) => ({
  number: index + 1,
  ...qn,
}));

session.set(QUIZ_QUESTIONS, questions);

const _questionNumber = session.get(QUESTION_NUMBER, 0);

function Questions() {
  const quizTimePerQuestion = session.get(QUIZ_TIME_PER_QUESTION, 30);
  const maxQuizTime = questions.length * quizTimePerQuestion * 1000;
  const _timer = session.get(TIMER, maxQuizTime);

  const [questionNumber, setQuestionNumber] = useState(_questionNumber);
  const [activeQuestion, setActiveQuestion] = useState(
    questions[_questionNumber]
  );
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [time, setTime] = useState(_timer);
  const history = useHistory();

  const quizTime = useMemo(() => {
    if (time !== 0 && questionNumber < questions.length - 1) {
      return "";
    }
    return time === 0
      ? formatTime(maxQuizTime)
      : formatTime(maxQuizTime - time);
  }, [time, maxQuizTime, questionNumber]);

  const submitAnswers = useCallback(() => {
    let user_answers = session.get(USER_ANSWERS, []);
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
    session.set(USER_QUIZ_REVIEW, reviewQuiz);
    session.set(USER_QUIZ_SCORE, quizScore);
    session.set(USER_QUIZ_TIME, quizTime);
    session.remove(USER_ANSWERS);
    session.remove(TIMER);
    session.remove(QUIZ_QUESTIONS);
    session.remove(QUESTION_NUMBER);
    logFbEvent(`User quiz score - ${quizScore}`);
    logFbEvent(`User quiz time - ${quizTime}`);
    history.replace(FINISH_PATH);
  }, [quizTime, history]);

  useEffect(() => {
    if (time === 0) {
      logFbEvent("Habis waktu Redirect");
      submitAnswers();
      return;
    }
    const timeout = setTimeout(() => {
      session.set(TIMER, time);
      setTime((prevState) => prevState - 1000);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [time, submitAnswers]);

  useEffect(() => {
    let user_answers = session.get(USER_ANSWERS, []);
    const foundAnswer = user_answers.find(
      (ans) => ans.id === activeQuestion.id
    );
    if (foundAnswer) {
      setSelectedAnswer(foundAnswer.answer);
    } else {
      setSelectedAnswer("");
    }
  }, [activeQuestion]);

  useEffect(() => {
    session.set(QUESTION_NUMBER, questionNumber);
    setActiveQuestion(questions[questionNumber]);
  }, [questionNumber]);

  const handleSelectAnswer = useCallback((answer, questionID) => {
    let user_answers = session.get(USER_ANSWERS, []);
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
    session.set(USER_ANSWERS, updated_user_answer);
    setSelectedAnswer(answer);
  }, []);

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
      <Navigation
        questions={questions}
        selectedAnswer={selectedAnswer}
        questionNumber={questionNumber}
        onSetQuestionNumber={setQuestionNumber}
        onSubmitAnswers={submitAnswers}
      />
    </Container>
  );
}

export default Questions;
