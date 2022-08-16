import { Dimmer, Loader, Segment } from "semantic-ui-react";
import { Container } from "./_loadingStyle";

function Loading() {
  return (
    <Container>
      <Segment piled>
        <Dimmer active inverted>
          <Loader size="large">Loading</Loader>
        </Dimmer>
      </Segment>
    </Container>
  );
}

export default Loading;
