import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/index.jsx";
import Questions from "./questions/index.jsx";
import Finish from "./finish/index.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/questions">
          <Questions />
        </Route>
        <Route path="/finish">
          <Finish />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
