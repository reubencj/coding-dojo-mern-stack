import React, { useState } from "react";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
const Main = (props) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    toggle === true ? setToggle(false) : setToggle(true);
  };

  return (
    <div>
      <ProductForm handleToggle={handleToggle} />
      <hr></hr>
      <ProductList toggle={toggle} />
    </div>
  );
};

export default Main;
