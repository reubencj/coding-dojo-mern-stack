import "./App.css";
import Main from "./views/Main";
import { Router } from "@reach/router";
import ProductDetails from "./components/ProductDetail";
import ProductUpdate from "./views/ProductUpdate";

function App() {
  return (
    <Router>
      <Main path="/" />
      <ProductDetails path="/:id" />
      <ProductUpdate path="/:id/edit" />
    </Router>
  );
}

export default App;
