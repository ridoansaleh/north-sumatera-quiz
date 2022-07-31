import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Modal, Form, Radio } from "semantic-ui-react";
import { logFbEvent } from "../../fbEvent";
import session from "../../sessionStorage";
import { APP_PATHS, APP_SESSION_STORAGE } from "../../constant";

const quizLevels = [
  { key: "m", text: "Mudah - 30 detik / soal", value: "Mudah" },
  { key: "sd", text: "Sedang - 20 detik / soal", value: "Sedang" },
  { key: "s", text: "Sulit - 10 detik / soal", value: "Sulit" },
  { key: "ss", text: "Super Sulit - 5 detik / soal", value: "Super Sulit" },
  { key: "dw", text: "Dewa - 2 detik / soal", value: "Dewa" },
];

const { QUESTIONS_PATH } = APP_PATHS;
const { QUIZ_TIME_PER_QUESTION, USER_QUIZ_LEVEL } = APP_SESSION_STORAGE;

const radioStyle = {
  border: '1px solid rgba(34,36,38,.15)',
  borderRadius: '4px',
  padding: '10px 12px',
  width: '100%',
}

function QuizLevelModal({ displayModal, setDisplayModal }) {
  const [quizLevel, setQuizLevel] = useState("");
  const history = useHistory();

  const handleLevelChange = (_, { value }) => {
    switch (value) {
      case "Mudah":
        session.set(QUIZ_TIME_PER_QUESTION, 30);
        break;
      case "Sedang":
        session.set(QUIZ_TIME_PER_QUESTION, 20);
        break;
      case "Sulit":
        session.set(QUIZ_TIME_PER_QUESTION, 10);
        break;
      case "Super Sulit":
        session.set(QUIZ_TIME_PER_QUESTION, 5);
        break;
      case "Dewa":
        session.set(QUIZ_TIME_PER_QUESTION, 2);
        break;
      default:
    }
    session.set(USER_QUIZ_LEVEL, value);
    setQuizLevel(value);
    setTimeout(() => {
      logFbEvent(`Kuis level - ${value}`);
      history.replace(QUESTIONS_PATH);
    }, 500);
  };

  const handleBatalClick = () => {
    logFbEvent("Batal button clicked");
    setDisplayModal(false);
  };

  return (
    <Modal
      size="small"
      dimmer="blurring"
      open={displayModal}
      onClose={() => setDisplayModal(false)}
    >
      <Modal.Header>Pilih Level Kuis!</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>Level kuis berfungsi menentukan durasi kuis</Form.Field>
          {quizLevels.map((level) => (
            <Form.Field key={level.key}>
              <Radio
                style={radioStyle}
                label={level.text}
                name="quizLevel"
                value={level.value}
                checked={quizLevel === level.value}
                onChange={handleLevelChange}
              />
            </Form.Field>
          ))}
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={handleBatalClick}>
          Batal
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default QuizLevelModal;
