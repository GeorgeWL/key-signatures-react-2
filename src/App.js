import CircleList from "./components/CircleOfFifths/CircleList";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Hello CodeSandbox</h1>
      </header>
      <main>
        <CircleList />
      </main>
      <Footer />
    </div>
  );
}
