import React from "react";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
const Main = (props) => {
  return (
    <div>
      <ProductForm />
      <hr></hr>
      <ProductList />
    </div>
  );
};

export default Main;
