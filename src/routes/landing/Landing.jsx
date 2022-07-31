import { useState, useEffect, lazy } from "react";
import { Button } from "semantic-ui-react";
import { Container, Image, Version } from "./_landingStyle";
import questionsIllustration from "./undraw_quiz_re_aol4.svg";
import { logFbEvent } from "../../fbEvent";
import session from "../../sessionStorage";
const QuizLevelModal = lazy(() => import("./QuizLevelModal.jsx"));

function Landing() {
  const [displayModal, setDisplayModal] = useState(false);

  useEffect(() => {
    session.clear();
  }, []);

  const handleStartClick = () => {
    logFbEvent("Ayo Mulai button clicked");
    setDisplayModal(true);
  };

  return (
    <Container>
      <h2>
        Tes Pengetahuanmu Tentang <span>Sumatera Utara</span> dengan Menjawab
        Kuis ini
      </h2>
      <Image src={questionsIllustration} />
      <Button primary fluid onClick={handleStartClick}>
        Ayo Mulai!
      </Button>
      <Version>Kuis Sumut - versi 2.1</Version>
      <QuizLevelModal
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
      />
    </Container>
  );
}

export default Landing;
