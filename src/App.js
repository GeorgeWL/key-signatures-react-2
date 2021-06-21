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
              <NavLink to="/keys">All Keys</NavLink>
            </li>
            <li>
              <NavLink to="/keys/major">Major Keys</NavLink>
            </li>
            <li>
              <NavLink to="/keys/minor">Minor Keys</NavLink>
            </li>
          </ul>
        </nav>
        <main>
          <h1>Hello CodeSandbox</h1>
          <Switch>
            <Route exact path="/keys/:type">
              <KeySelect />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
