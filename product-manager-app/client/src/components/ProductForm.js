import React, { useState } from "react";
import axios from "axios";

const ProductForm = (props) => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products", {
        title: title,
        price: price,
        description: description,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    console.log({ title, price, description });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Product Manager</h1>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          id="price"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Desciption</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <input type="submit" value="create" />
    </form>
  );
};

export default ProductForm;
