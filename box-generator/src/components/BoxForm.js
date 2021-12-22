import React, { useState } from "react";

const BoxForm = (props) => {
  const [color, setColor] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for>Color</label>
        <input type="text" placeholder="Type a color" name="color" id="color" />
        <input type="submit">Add</input>
      </form>
      <div></div>
    </>
  );
};
