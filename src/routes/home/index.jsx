import { useHistory } from "react-router-dom";
import { Image, Button } from "semantic-ui-react";
import { Container } from "./_homeStyle";
import questionsIllustration from "./undraw_Questions_re_1fy7.svg";

function Home() {
  const history = useHistory();

  const handleStartClick = () => {
    history.replace("/questions");
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
