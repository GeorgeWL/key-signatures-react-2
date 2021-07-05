import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <header>
          <h1>Hello CodeSandbox</h1>
        </header>
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
