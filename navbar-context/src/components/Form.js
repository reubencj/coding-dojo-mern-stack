import React, { useContext, useState } from "react";
import MyContext from "../context/MyContext";

const MyForm = (props) => {
  const { setName } = useContext(MyContext);
  const [newName, setNewName] = useState("");

  const handleSubmit = () => {
    if (newName !== "") {
      setName("Welcome, " + newName);
      setNewName("");
    }
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
      />
      <button onClick={handleSubmit}> Click </button>
    </div>
  );
};

export default MyForm;
