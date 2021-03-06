import { useHistory } from "react-router-dom";
import { Image, Button } from "semantic-ui-react";
import { Container } from "./_homeStyle";
import questionsIllustration from "./undraw_Questions_re_1fy7.svg";
import { APP_PATHS } from "../../constant";

const { QUESTIONS_PATH } = APP_PATHS;

function Home() {
  const history = useHistory();

  const handleStartClick = () => {
    window.FB.AppEvents.logEvent("Ayo Mulai button clicked");
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
    </Container>
  );
}

export default Home;
