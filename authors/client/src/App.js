import Main from "./views/Main";
import "./App.css";
import { Router } from "@reach/router";
import NewAuthor from "./views/NewAuthor";
import UpdateAuthor from "./views/UpdateAuthor";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Main path="/" />
      <NewAuthor path="/new" />
      <UpdateAuthor path="/edit/:id" />
    </Router>
  );
}

export default App;
