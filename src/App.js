import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChordCard from "./components/ChordCard";
import CircleList from "./components/CircleOfFifths/CircleList";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <header>
          <h1>Hello CodeSandbox</h1>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <CircleList />
            </Route>
            <Route path="/chord">
              <ChordCard />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
