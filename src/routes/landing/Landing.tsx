import { useState, useEffect, lazy } from "react";
import { Button } from "semantic-ui-react";
import { Container, Image, Version } from "./_landingStyle";
import questionsIllustration from "./undraw_quiz_re_aol4.svg";
import session from "../../sessionStorage";
import { APP_SESSION_STORAGE } from "../../constant";
import { getUserLocation, saveUsersVisit } from "../../services";
const QuizLevelModal = lazy(() => import("./QuizLevelModal"));

const { USER_HAS_VISITED } = APP_SESSION_STORAGE;

function Landing() {
  const [displayModal, setDisplayModal] = useState(false);

  useEffect(() => {
    const hasUserVisit = session.get(USER_HAS_VISITED);
    if (!hasUserVisit) {
      session.set(USER_HAS_VISITED, true);
      getUserLocation().then((res) => {
        saveUsersVisit({
          created_at: Date(),
          city: res.city,
          country: res.country,
        });
      });
    }
  }, []);

  const handleStartClick = () => {
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
      <Version>Kuis Sumut - versi 4.1</Version>
      <QuizLevelModal
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
      />
    </Container>
  );
}

export default Landing;
