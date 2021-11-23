import React, { useContext } from "react";
import MyContext from "../context/MyContext";

const NavBar = (props) => {
  const { name } = useContext(MyContext);

  return <h1>{name}</h1>;
};

export default NavBar;
