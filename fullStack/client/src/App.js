import "./App.css";
import Main from "./views/Main.js";
import Details from "./components/Details";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/people/" />
        <Details path="/people/:id" />
      </Router>
    </div>
  );
}

export default App;
