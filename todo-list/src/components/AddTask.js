import React, { useState } from "react";
import Styles from "./AddTask.module.css";

const AddTask = (props) => {
  const [task, setTask] = useState("");

  const createID = () => {
    const todayDateStr = Date.now().toString(36);
    const randLetters = Math.random().toString(36).substr(2);
    return todayDateStr + randLetters;
  };

  const handleAdd = () => {
    props.addNewTask({ taskName: task, completed: false, id: createID() });
    setTask("");
  };

  const handleEnterKey = (e) => {
    if (e.keyCode === 13) {
      handleAdd();
    }
  };

  return (
    <div>
      <input
        type="text"
        name="task"
        id="task"
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add Task"
        value={task}
        className={Styles.addTextStyle}
        onKeyDown={(e) => handleEnterKey(e)}
      />
      <button onClick={handleAdd} className={Styles.addBtn}>
        Add
      </button>
    </div>
  );
};

export default AddTask;
