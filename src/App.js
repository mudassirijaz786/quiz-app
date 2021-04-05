import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./components/User";
import Quiz from "./components/Quiz";

function App() {
  return (
    <div className="App">
      {/* Routing */}
      <Router>
        <Switch>
          <Route exact path="/" component={User} />
          <Route exact path="/quiz" component={Quiz} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
