import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Image, Button, Modal, Form, Select } from "semantic-ui-react";
import { Container, ContentWrapper } from "./_homeStyle";
import questionsIllustration from "./undraw_Questions_re_1fy7.svg";
import { logFbEvent } from "../../fb_event";
import { APP_PATHS, APP_SESSION_STORAGE } from "../../constant";

const { QUESTIONS_PATH } = APP_PATHS;
const { QUIZ_TIME_PER_QUESTION } = APP_SESSION_STORAGE;

const options = [
  { key: "m", text: "Mudah - 30 detik / soal", value: "Mudah" },
  { key: "sd", text: "Sedang - 20 detik / soal", value: "Sedang" },
  { key: "s", text: "Sulit - 10 detik / soal", value: "Sulit" },
  { key: "ss", text: "Super Sulit - 5 detik / soal", value: "Super Sulit" },
  { key: "dw", text: "Dewa - 2 detik / soal", value: "Dewa" },
];

function Home() {
  const [displayModal, setDisplayModal] = useState(false);
  const [quizLevel, setQuizLevel] = useState("");
  const history = useHistory();

  const handleStartClick = () => {
    logFbEvent("Ayo Mulai button clicked");
    setDisplayModal(true);
  };

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
    <Container>
      <h2>
        Tes Pengetahuanmu Mengenai <span>Sumatera Utara</span> dengan Menjawab
        Kuis ini
      </h2>
      <Image src={questionsIllustration} />
      <Button primary fluid onClick={handleStartClick}>
        Ayo Mulai!
      </Button>
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
                options={options}
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
    </Container>
  );
}

export default Home;
