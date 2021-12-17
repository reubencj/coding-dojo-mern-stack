import React, { useState } from "react";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import axios from "axios";
const Main = (props) => {
  const [toggle, setToggle] = useState(false);

  const createProduct = (product) => {
    const { title, price, description } = product;
    console.log(product);
    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
      })
      .then(() => setToggle(!toggle))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <ProductForm
        productData={{ title: "", price: "", description: "" }}
        submitLogic={createProduct}
        submitValue="create"
      />
      <hr></hr>
      <ProductList toggle={toggle} />
    </div>
  );
};

export default Main;
