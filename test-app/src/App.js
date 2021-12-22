import "./App.css";
import React, { createContext, useContext } from "react";
import TestComp from "./components/TestComp";

import MyButton from "./components/MyButtonComponent";
import ListAdder from "./components/ListAdder";
export const MyContext = createContext();

function App() {
  return (
    <div className="App">
      <TestComp />
    </div>
  );
}

export default App;
