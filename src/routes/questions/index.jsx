import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import Question from "../../components/question/index.jsx";
import { Container, Navigation } from "./_questionsStyle";
import { questions, answers } from "./data";

function Questions() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const history = useHistory();

  let list_answer = sessionStorage.getItem("user_answers");
  list_answer = list_answer ? JSON.parse(list_answer) : [];

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
    sessionStorage.setItem("user_answers", JSON.stringify(updated_list_answer));
  };

  const handleKembaliClick = () => {
    setQuestionNumber((prevState) => prevState - 1);
  };

  const handleLanjutClick = () => {
    if (questionNumber < questions.length - 1) {
      setQuestionNumber((prevState) => prevState + 1);
      setSelectedAnswer("");
    } else {
      let quizScore = 0;
      list_answer.forEach((ans) => {
        const correctAnswer = answers.find(
          (correctAns) => correctAns.id === ans.id
        );
        if (ans.answer === correctAnswer.answer) {
          quizScore = quizScore + (1 / questions.length) * 100;
        }
      });
      sessionStorage.setItem("quiz_score", quizScore);
      sessionStorage.removeItem("user_answers");
      history.replace("/finish");
    }
  };

  return (
    <Container>
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
