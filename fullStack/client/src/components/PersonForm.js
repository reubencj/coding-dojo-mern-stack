import React, { useState } from "react";
import axios from "axios";

const PersonForm = (props) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const handleSumbit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/people", { firstName, lastName })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSumbit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <input type="submit" value="sumbit" />
    </form>
  );
};

export default PersonForm;
