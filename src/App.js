import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import Footer from "./components/Footer";
import KeySelect from "./components/KeySelect";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" activeClassName="link-active">
                All Keys
              </NavLink>
            </li>

            <ul>
              <li>
                <NavLink to="/major" activeClassName="link-active">
                  Major Keys
                </NavLink>
              </li>
              <li>
                <NavLink to="/minor" activeClassName="link-active">
                  Minor Keys
                </NavLink>
              </li>
            </ul>
          </ul>
        </nav>
        <main>
          <h1>Hello CodeSandbox</h1>
          <Switch>
            <Route exact path="/:type">
              <KeySelect />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
