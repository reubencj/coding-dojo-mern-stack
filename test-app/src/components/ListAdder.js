import React, { useState } from "react";
import useList from "../Hooks/useList";

const ListAdder = (props) => {
  const [item, setItem] = useState();
  const { list, add, remove } = useList();

  const handleAdd = () => {
    add(item);
    setItem("");
  };

  return (
    <div>
      {list.map((task, index) => {
        return (
          <div key={index}>
            <p key={index}>{task}</p>
            <button onClick={() => remove(index)} key={index}>
              Delete
            </button>
          </div>
        );
      })}
      <input
        type="text"
        name="item"
        id="item"
        onChange={(e) => setItem(e.target.value)}
        value={item}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default ListAdder;
