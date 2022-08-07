import { useState, useEffect } from "react";
import useSWR from "swr";
import { getData } from "../../services";
import session from "../../sessionStorage";
import { generateQuestions } from "./utils";
import { APP_SESSION_STORAGE } from "../../constant";

const { QUIZ_QUESTIONS } = APP_SESSION_STORAGE;

function useQuestions() {
  const { data, error } = useSWR("questions", getData, { fallbackData: [] });
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    if (!data.length) return 
    const questionList = session.get(
      QUIZ_QUESTIONS,
      generateQuestions(data)
    );
    setQuestions(questionList)
  }, [data]);

  return {
    questions,
    errorQuestions: error,
  };
}

export default useQuestions;
