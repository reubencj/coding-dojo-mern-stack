import axios from "axios";
import React, { useState, useEffect } from "react";

const Details = (props) => {
  const [person, setPerson] = useState();

  useEffect(() => {
    axios.get("http://localhost:8000/api/people/" + props.id).then((res) => {
      setPerson({rres.data,});
      console.log(person);
    });
  }, []);

  return <div>{person && <h1>{person.firstName}</h1>} </div>;
};

export default Details;
