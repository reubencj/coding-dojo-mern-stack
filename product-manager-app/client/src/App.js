import "./App.css";
import Main from "./views/Main";
import { Router } from "@reach/router";
import ProductDetails from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <Main path="/" />
      <ProductDetails path="/:id" />
    </Router>
  );
}

export default App;
