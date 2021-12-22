import React, { useReducer } from "react";
import styles from "./Form.module.css";

//initial value of state
const initialState = {
  firstName: {
    value: "",
    noError: true,
  },
  lastName: {
    value: "",
    noError: true,
  },
  email: {
    value: "",
    noError: true,
  },
};

const validateInput = (type, value) => {
  //function to validate if the user input has a valid name or email
  let validName = /^[A-Za-z]+$/;
  let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (value.length === 0) {
    return true;
  } else if (type === "firstName" || type === "lastName") {
    return validName.test(value);
  } else if (type === "email") {
    return validEmail.test(value);
  }
};

const reducer = (state, action) => {
  //reducer function which is used to update the state
  //copy the existing state and the overide existing key with the changed key.
  //action has two properties type and payload. Type is the action you would want to do, in this case is the key. Payload is the data you want to pass
  return { ...state, [action.type]: action.payload };
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInput = (e) => {
    /*funtion used in the event handler. it takes name from the target property of the event object and 
    assigns it to the the action variable. The action variable is used for the dispatch function used to make the changes to state. 
    this is similar to the useState function which is used to rerender the app */
    const { name, value } = e.target;
    const noError = validateInput(name, value);
    const action = {
      type: name,
      payload: {
        value: value,
        noError: noError,
      },
    };

    dispatch(action);
  };

  return (
    <div className={styles.emailForm}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        onChange={(e) => handleInput(e)}
      />

      {
        //handle the error messages
        state.firstName.noError === false && (
          <p className={styles.error}>
            First name must be letters with no spaces
          </p>
        )
      }

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        onChange={(e) => handleInput(e)}
      />

      {state.lastName.noError === false && (
        <p className={styles.error}>Last name must be letters with no spaces</p>
      )}

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => handleInput(e)}
      />

      {state.email.noError === false && (
        <p className={styles.error}>Email must be valid</p>
      )}

      <button type="submit">Submit</button>
    </div>
  );
};

export default Form;
