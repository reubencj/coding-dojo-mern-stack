import React, { useReducer } from "react";

const initialState = {
  fname: "",
  email: "",
  phone: "",
};

const reducer = (state, action) => {
  return {
    ...state,
    [action.type]: action.payload,
  };
};

const Form = () => {
  const [state, distach] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    distach({ type: name, payload: value });
  };

  return (
    <div>
      <h1>{state.fname}</h1>
      <h1>{state.email}</h1>
      <h1>{state.phone}</h1>
      <label htmlFor="fname"> First Name</label>
      <input
        type="text"
        name="fname"
        id="fname"
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="email"> Email </label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="phone"> Phone Number</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Form;
