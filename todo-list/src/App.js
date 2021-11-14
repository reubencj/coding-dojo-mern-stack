import "./App.css";
import AddTask from "./components/AddTask";
import React, { useReducer } from "react";
import TaskList from "./components/TaskList";

const initialvalue = [];

const reducer = (currentTask, action) => {
  if (action.type === "add") {
    return [...currentTask, action.payload];
  } else if (action.type === "check") {
    const restOfTask = currentTask.filter(
      (task) => task.id !== action.payload.id
    );
    return [...restOfTask, action.payload];
  } else if (action.type === "delete") {
    console.log("clicked");
    return currentTask.filter((task) => task.id !== action.payload.id);
  } else {
    return currentTask;
  }
};

function App() {
  const [currentTask, dispatch] = useReducer(reducer, initialvalue);

  const handleTask = (actionType) => {
    const dispatchTask = (state) => {
      const action = { type: actionType, payload: state };
      dispatch(action);
    };

    return dispatchTask;
  };

  return (
    <div className="App">
      <h1 className="header">To Do App</h1>
      <AddTask addNewTask={handleTask("add")} />
      <TaskList
        tasks={currentTask}
        sendCheckBoxValue={handleTask("check")}
        sendDeleteData={handleTask("delete")}
      />
    </div>
  );
}

export default App;
