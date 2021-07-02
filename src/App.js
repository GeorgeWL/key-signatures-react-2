import Footer from "./components/Footer";
import KeySelect from "./components/KeySelect";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <main>
        <h1>Hello CodeSandbox</h1>
        <KeySelect />
      </main>
      <Footer />
    </div>
  );
}
