import { Router } from "@reach/router";
import "./App.css";
import Home from "./components/Home";
import Hello from "./components/Hello";
function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Hello path="/:text" />
        <Hello path="/:text/:color/:backgroundColor" />
      </Router>
    </div>
  );
}

export default App;
