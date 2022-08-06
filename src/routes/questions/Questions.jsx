import { useState, useEffect, useCallback, useMemo } from "react";
import { useHistory } from "react-router-dom";
import useSWR from "swr";
import Loading from "../../components/loading";
import Error from "../../components/error-boundary/Error";
import Question from "./sections/Question.jsx";
import Navigation from "./sections/Navigation.jsx";
import { Container, Time } from "./styles/_questionsStyle";
import session from "../../sessionStorage";
import { generateQuestions, formatTime } from "./utils";
import {
  APP_PATHS,
  APP_SESSION_STORAGE,
  NUMBER_OF_QUIZ_QUESTIONS,
} from "../../constant";
import { checkAnswer, getData } from "../../services";

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

const initialQuestionNumber = session.get(QUESTION_NUMBER, 0);

function Questions() {
  const { data: questions, error: errorQuestions } = useSWR(
    "questions",
    getData,
    { fallbackData: [] }
  );
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(initialQuestionNumber);
  const [activeQuestion, setActiveQuestion] = useState({
    id: "",
    number: "",
    image_source: "",
    question: "",
    answers: [],
  });
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [maxQuizTime, setMaxQuizTime] = useState();
  const [time, setTime] = useState();
  const history = useHistory();

  useEffect(() => {
    if (questions?.length) {
      const updatedQuestions = session.get(
        QUIZ_QUESTIONS,
        generateQuestions(questions)
      );
      session.set(QUIZ_QUESTIONS, updatedQuestions);
      const _quizTimePerQuestion = session.get(QUIZ_TIME_PER_QUESTION, 30);
      const _maxQuizTime =
        updatedQuestions.length * _quizTimePerQuestion * 1000;
      const _timer = session.get(TIMER, _maxQuizTime);
      setMaxQuizTime(_maxQuizTime);
      setTime(_timer);
      setSelectedQuestions(updatedQuestions);
    }
  }, [questions]);

  const quizTime = useMemo(() => {
    if (time !== 0 && questionNumber < NUMBER_OF_QUIZ_QUESTIONS - 1) {
      return "";
    }
    return time === 0
      ? formatTime(maxQuizTime)
      : formatTime(maxQuizTime - time);
  }, [time, maxQuizTime, questionNumber]);

  const submitAnswers = useCallback(() => {
    let userAnswers = session.get(USER_ANSWERS, []);
    let quizScore = 0;
    let reviewQuiz = [];

    userAnswers.forEach((ans) => {
      if (ans.status) {
        quizScore = quizScore + (1 / selectedQuestions.length) * 100;
      }
      reviewQuiz.push({
        question: selectedQuestions.find((qs) => qs.id === ans.id).question,
        answer: ans.answer,
        status: ans.status,
      });
    });

    session.set(USER_QUIZ_REVIEW, reviewQuiz);
    session.set(USER_QUIZ_SCORE, quizScore);
    session.set(USER_QUIZ_TIME, quizTime);
    session.remove(USER_ANSWERS);
    session.remove(TIMER);
    session.remove(QUIZ_QUESTIONS);
    session.remove(QUESTION_NUMBER);
    history.replace(FINISH_PATH);
  }, [quizTime, selectedQuestions, history]);

  useEffect(() => {
    if (time === undefined) return;
    if (time === 0) {
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
    let userAnswers = session.get(USER_ANSWERS, []);
    const foundAnswer = userAnswers.find(
      (ans) => ans.id === activeQuestion?.id
    );
    setSelectedAnswer(foundAnswer?.answer || "");
  }, [activeQuestion]);

  useEffect(() => {
    session.set(QUESTION_NUMBER, questionNumber);
    if (selectedQuestions.length > 0) {
      setActiveQuestion(selectedQuestions[questionNumber]);
    }
  }, [selectedQuestions, questionNumber]);

  useEffect(() => {
    const updateUserAnswers = async ({ answer, questionId }) => {
      const isAnswerCorrect = await checkAnswer({ questionId, answer });
      let userAnswers = session.get(USER_ANSWERS, []);
      const answerDetail = {
        id: questionId,
        answer,
        status: isAnswerCorrect,
      };
      const isAnswerExist = userAnswers.find(
        (answer) => answer.id === questionId
      );
      if (!isAnswerExist) {
        userAnswers.push(answerDetail);
      }
      const updatedUserAnswers = userAnswers.map((answer) => {
        if (answer.id === questionId) return answerDetail;
        return answer;
      });
      session.set(USER_ANSWERS, updatedUserAnswers);
    };

    if (activeQuestion.id && selectedAnswer) {
      updateUserAnswers({
        answer: selectedAnswer,
        questionId: activeQuestion.id,
      });
    }
  }, [activeQuestion, selectedAnswer]);

  if (errorQuestions) {
    return <Error />;
  }

  if (questions.length === 0) return <Loading />;

  return (
    <Container>
      <Time>
        Sisa waktu: <span>{formatTime(time)}</span>
      </Time>
      <Question
        questionDetail={activeQuestion}
        selectedAnswer={selectedAnswer}
        onSelectedAnswer={setSelectedAnswer}
      />
      <Navigation
        totalQuestion={selectedQuestions.length}
        selectedAnswer={selectedAnswer}
        questionNumber={questionNumber}
        onSetQuestionNumber={setQuestionNumber}
        onSubmitAnswers={submitAnswers}
      />
    </Container>
  );
}

export default Questions;
