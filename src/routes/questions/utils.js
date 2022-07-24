import { NUMBER_OF_QUIZ_QUESTIONS } from '../../constant'

export const formatTime = (time) => {
  let timeText = "";
  let seconds = time / 1000;
  if (seconds >= 60) {
    let minutes = Math.floor(seconds / 60);
    let secondsText;
    seconds = seconds % 60;
    secondsText = seconds > 0 ? `${seconds} detik` : "";
    timeText = `${minutes} menit ${secondsText}`;
    return timeText;
  }
  timeText = `${seconds} detik`;
  return timeText;
};


const shuffleQuestionIDs = (totalQuestions) => {
  let arr = [];
  while (arr.length < NUMBER_OF_QUIZ_QUESTIONS) {
    let numb = Math.floor(Math.random() * totalQuestions) + 1;
    if (arr.indexOf(numb) === -1) arr.push(numb);
  }
  return arr;
};

export const generateQuestions = (questions) => {
  const questionIds = shuffleQuestionIDs(questions.length)
  const questionList = questionIds.map((id) => questions.find((qn) => qn.id === id));
  return questionList.map((question, idx) => ({ number: idx+1, ...question }));
};
