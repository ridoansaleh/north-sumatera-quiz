import { Suspense, lazy } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Loading from "../components/loading";
import ErrorBoundary from "../components/error-boundary/ErrorBoundary";
import { APP_PATHS } from "../constant";
const Landing = lazy(() => import("./landing"));
const Questions = lazy(() => import("./questions"));
const Finish = lazy(() => import("./finish"));
const Review = lazy(() => import("./review"));

const { LANDING_PATH, QUESTIONS_PATH, FINISH_PATH, REVIEW_PATH } = APP_PATHS;

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path={LANDING_PATH} exact>
            <Landing />
          </Route>
          <Route path={QUESTIONS_PATH}>
            <ErrorBoundary>
              <Questions />
            </ErrorBoundary>
          </Route>
          <Route path={FINISH_PATH}>
            <Finish />
          </Route>
          <Route path={REVIEW_PATH}>
            <Review />
          </Route>
        </Switch>
      </Suspense>
    </HashRouter>
  );
}

export default App;
