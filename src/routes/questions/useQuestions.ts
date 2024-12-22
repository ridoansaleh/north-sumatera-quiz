import { useState, useEffect } from "react";
import useSWR from "swr";
import { getQuestions } from "../../services";
import session from "../../sessionStorage";
import { generateQuestions } from "./utils";
import { APP_SESSION_STORAGE } from "../../constant";
import { IQuestionUI } from '../../types'

const { QUIZ_QUESTIONS } = APP_SESSION_STORAGE;

type ReturnTypes = {
  questions: IQuestionUI[]
  errorQuestions: boolean
}

function useQuestions(): ReturnTypes {
  const { data, error } = useSWR("questions", getQuestions, { fallbackData: [] });
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    if (!data?.length) return 
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
