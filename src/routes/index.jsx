import { Suspense, lazy } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "../components/Loading/index.jsx";
import { APP_PATHS } from "../constant";
const Home = lazy(() => import("./home/index.jsx"));
const Questions = lazy(() => import("./questions/index.jsx"));
const Finish = lazy(() => import("./finish/index.jsx"));
const Review = lazy(() => import("./review/index.jsx"));

const { HOME_PATH, QUESTIONS_PATH, FINISH_PATH, REVIEW_PATH } = APP_PATHS;

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </Router>
  );
}

export default App;
