import React, { useState, useContext } from "react";
import styles from "./MyButtonComponent.module.css";

import { MyContext } from "../App";

const MyButton = (props) => {
  const [firstName, setFirstName] = useState("");
  const [nameList, setNameList] = useState([]);
  const context = useContext(MyContext);

  const addName = (name) => setNameList([...nameList, firstName]);

  return (
    <div>
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <button className={styles.btn} onClick={() => addName(firstName)}>
        {context}
      </button>
      <h1>{firstName}</h1>
      <ul>
        {nameList.map((text) => (
          <li> {text} </li>
        ))}
      </ul>
    </div>
  );
};

export default MyButton;

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = () => console.log(`hi my name is ${this.firstName}`);
}

const reuben = new Person("Reuben", "John");
reuben.sayHello();
console.log(reuben.prototype);
