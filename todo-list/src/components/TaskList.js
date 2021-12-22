import React, { useState } from "react";
import styles from "./TaskList.module.css";

const TaskList = (props) => {
  const { tasks } = props;
  //{id: 30943840, taskName: finsishi, completed: false}, complete: true

  const handleCheck = (checkValue, taskData) => {
    if (checkValue) {
      props.sendCheckBoxValue({ ...taskData, completed: true });
    } else {
      props.sendCheckBoxValue({ ...taskData, completed: false });
    }
  };

  const handleDelete = (taskDate) => props.sendDeleteData(taskDate);

  return (
    <div>
      {tasks.map((task, index) => {
        return (
          <div className={styles.taskStyle}>
            <p
              key={index}
              className={task.completed ? styles.completed : styles.notComplete}
            >
              {task.taskName}{" "}
            </p>

            <div>
              <input
                type="checkbox"
                value={true}
                onChange={(event) => handleCheck(event.target.checked, task)}
                className={styles.checkboxStyle}
                checked={task.completed}
              />
              <button
                onClick={() => handleDelete(task)}
                className={styles.deleteBtnStyle}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
