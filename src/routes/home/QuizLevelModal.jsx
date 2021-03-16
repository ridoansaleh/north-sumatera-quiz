import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Modal, Form, Select } from "semantic-ui-react";
import { ContentWrapper } from "./_homeStyle";
import { logFbEvent } from "../../fb_event";
import { APP_PATHS, APP_SESSION_STORAGE } from "../../constant";

const optionsLevel = [
  { key: "m", text: "Mudah - 30 detik / soal", value: "Mudah" },
  { key: "sd", text: "Sedang - 20 detik / soal", value: "Sedang" },
  { key: "s", text: "Sulit - 10 detik / soal", value: "Sulit" },
  { key: "ss", text: "Super Sulit - 5 detik / soal", value: "Super Sulit" },
  { key: "dw", text: "Dewa - 2 detik / soal", value: "Dewa" },
];

const { QUESTIONS_PATH } = APP_PATHS;
const { QUIZ_TIME_PER_QUESTION, USER_QUIZ_LEVEL } = APP_SESSION_STORAGE;

function QuizLevelModal({ displayModal, setDisplayModal }) {
  const [quizLevel, setQuizLevel] = useState("");
  const history = useHistory();

  const handleLevelChange = (_, { value }) => {
    logFbEvent(`Ubah level ke ${value}`);
    switch (value) {
      case "Mudah":
        sessionStorage.setItem(QUIZ_TIME_PER_QUESTION, 30);
        break;
      case "Sedang":
        sessionStorage.setItem(QUIZ_TIME_PER_QUESTION, 20);
        break;
      case "Sulit":
        sessionStorage.setItem(QUIZ_TIME_PER_QUESTION, 10);
        break;
      case "Super Sulit":
        sessionStorage.setItem(QUIZ_TIME_PER_QUESTION, 5);
        break;
      case "Dewa":
        sessionStorage.setItem(QUIZ_TIME_PER_QUESTION, 2);
        break;
      default:
    }
    sessionStorage.setItem(USER_QUIZ_LEVEL, value);
    setQuizLevel(value);
  };

  const handleBatalClick = () => {
    logFbEvent("Batal button clicked");
    setDisplayModal(false);
  };

  const handleMainkanSekarangClick = () => {
    logFbEvent("Mainkan Sekarang button clicked");
    logFbEvent(`Kuis level - ${quizLevel}`);
    history.replace(QUESTIONS_PATH);
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
        <ContentWrapper>
          Level kuis berguna untuk menentukan durasi waktu yang diperbolehkan
          dalam mengerjakan kuis.
          <Form>
            <Form.Field
              control={Select}
              options={optionsLevel}
              placeholder="Level"
              onChange={handleLevelChange}
            />
          </Form>
        </ContentWrapper>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={handleBatalClick}>
          Batal
        </Button>
        <Button
          positive
          disabled={quizLevel === ""}
          onClick={handleMainkanSekarangClick}
        >
          Mainkan Sekarang
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default QuizLevelModal;
