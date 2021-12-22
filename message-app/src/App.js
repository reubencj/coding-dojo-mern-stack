import "./App.css";
import React, { useState } from "react";
import MessageForm from "./components/MessageForm";
import MessageDisplay from "./components/MessageDisplay";

function App() {
  const [appMessages, setAppMessages] = useState([]);

  //const addNewMessages = (value) => setAppMessages([...appMessages, value]);

  return (
    <div className="App">
      <MessageDisplay messages={appMessages} />
      <MessageForm submitMessage={setAppMessages} />
    </div>
  );
}

export default App;
