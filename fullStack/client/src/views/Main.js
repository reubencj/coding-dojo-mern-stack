import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonFrom from "../components/PersonForm";
import PersonList from "../components/PersonList";

const Main = (props) => {
  const [persons, setPersons] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people")
      .then((res) => {
        setPersons(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err.response));
  }, []);

  return (
    <div>
      <PersonFrom />
      {loaded && <PersonList people={persons} />}
    </div>
  );
};

export default Main;
