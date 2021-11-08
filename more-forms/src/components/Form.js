import React, { useState } from "react";
import "../App.css";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  //const [passwordMatch, setPasswordMatch] = useState("");

  const handleInput = (
    setterFunction,
    updateValue,
    characterLimit,
    inputType,
    setErrorFunction
  ) => {
    setterFunction(updateValue);
    if (updateValue.length >= characterLimit) {
      setErrorFunction("");
    } else if (
      updateValue.length !== 0 &&
      updateValue.length < characterLimit
    ) {
      setErrorFunction(`${inputType} must be at least ${characterLimit}`);
    } else {
      setErrorFunction("");
    }
  };

  // const checkPasswordMatch = () => {
  //   if (password === confirmPassword) {
  //     setPasswordMatch("");
  //     console.log("match");
  //   } else {
  //     setPasswordMatch("Password must match");
  //     console.log("not match");
  //   }
  // };

  return (
    <div>
      <form action="">
        <div className="form-input">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={(e) => {
              handleInput(
                setFirstName,
                e.target.value,
                2,
                "First Name",
                setFirstNameError
              );
            }}
          />
        </div>
        <p className="error">{firstNameError}</p>

        <div className="form-input">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={(e) => {
              handleInput(
                setLastName,
                e.target.value,
                2,
                "Last Name",
                setLastNameError
              );
            }}
          />
        </div>
        <p className="error">{lastNameError}</p>

        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => {
              handleInput(setEmail, e.target.value, 5, "Email", setEmailError);
            }}
          />
        </div>
        <p className="error">{emailError}</p>

        <div className="form-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              handleInput(
                setPassword,
                e.target.value,
                8,
                "Password",
                setPasswordError
              );
            }}
          />
        </div>
        <p className="error">{passwordError}</p>
        {password !== confirmPassword && (
          <p className="error">Password must match</p>
        )}

        <div className="form-input">
          <label htmlFor="confirmPassword">Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={(e) => {
              handleInput(
                setConfirmPassword,
                e.target.value,
                8,
                "Password",
                setConfirmPasswordError
              );
            }}
          />
        </div>
        <p className="error">{confirmPasswordError}</p>
      </form>

      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirm Password: {confirmPassword}</p>
    </div>
  );
};

export default Form;
