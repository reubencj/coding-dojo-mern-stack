import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import MyButton from "./MyButtonComponent";

const Header = (props) => {
  const context = useContext(MyContext);

  return (
    <div>
      <h1>{context}</h1>
      <MyButton />
    </div>
  );
};

export default Header;
