import "./App.css";
import MyContext from "./context/MyContext";
import React, { useState } from "react";
import MyForm from "./components/Form";
import NavBar from "./components/Navbar";

function App() {
  const [name, setName] = useState("Welcome");
  return (
    <div className="App">
      <MyContext.Provider value={{ name, setName }}>
        <NavBar />
        <MyForm />
      </MyContext.Provider>
    </div>
  );
}

export default App;
