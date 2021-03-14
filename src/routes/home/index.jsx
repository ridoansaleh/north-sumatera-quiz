import { useState, lazy } from "react";
import { Image, Button } from "semantic-ui-react";
import { Container } from "./_homeStyle";
import questionsIllustration from "./undraw_Questions_re_1fy7.svg";
import { logFbEvent } from "../../fb_event";
const QuizLevelModal = lazy(() => import("./QuizLevelModal.jsx"));

function Home() {
  const [displayModal, setDisplayModal] = useState(false);

  const handleStartClick = () => {
    logFbEvent("Ayo Mulai button clicked");
    setDisplayModal(true);
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
      <QuizLevelModal
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
      />
    </Container>
  );
}

export default Home;
