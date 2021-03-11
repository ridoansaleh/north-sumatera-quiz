import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/index.jsx";
import Questions from "./questions/index.jsx";
import Finish from "./finish/index.jsx";
import Review from "./review/index.jsx";
import { APP_PATHS } from "../constant";

const { HOME_PATH, QUESTIONS_PATH, FINISH_PATH, REVIEW_PATH } = APP_PATHS;

function App() {
  return (
    <Router>
      <Switch>
        <Route path={HOME_PATH} exact>
          <Home />
        </Route>
        <Route path={QUESTIONS_PATH}>
          <Questions />
        </Route>
        <Route path={FINISH_PATH}>
          <Finish />
        </Route>
        <Route path={REVIEW_PATH}>
          <Review />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
