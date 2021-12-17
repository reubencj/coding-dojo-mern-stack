import React, { useState } from "react";
import axios from "axios";
import Styles from "./ProductForm.module.css";

const ProductForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products", {
        title: title,
        price: price,
        description: description,
      })
      .then((res) => props.handleToggle())
      .catch((err) => console.log(err));

    console.log({ title, price, description });
    setTitle("");
    setPrice("");
    setDescription("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={Styles.formStyle}>
      <h1>Product Manager</h1>
      <div className={Styles.formElement}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className={Styles.formElement}>
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          id="price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <div className={Styles.formElement}>
        <label htmlFor="description">Desciption</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <input type="submit" value="create" className={Styles.buttonStyle} />
    </form>
  );
};

export default ProductForm;
