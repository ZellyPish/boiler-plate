import "./App.css";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import auth from "./hoc/auth";
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={auth(LandingPage, null)} />
          <Route exact path="/login" component={auth(LoginPage, false)} />
          <Route exact path="/register" component={auth(RegisterPage, false)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
