import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import Styles from "./ProductForm.module.css";

const ProductUpdate = (props) => {
  const [product, setProduct] = useState({
    tite: "",
    price: "",
    description: "",
  });
  const [updated, setUpdated] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${props.id}`)
      .then((productData) => {
        setProduct(productData.data);
        console.log(productData.data);
        console.log(props.id);
      })
      .catch((err) => console.log(err));
  }, [props.id]);

  const updateProduct = (e) => {
    e.preventDefault();
    const payload = {
      title: product.title,
      price: product.price,
      description: product.description,
    };
    axios
      .put(`http://localhost:8000/api/products/${props.id}`, payload)
      .then((res) => {
        setUpdated("Product Updated");
        setTimeout(() => navigate("/"), 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={updateProduct} className={Styles.formStyle}>
      <div className={Styles.formElement}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={product.title || ""}
          onChange={(e) => {
            setProduct({ ...product, title: e.target.value });
          }}
        />
      </div>
      <div className={Styles.formElement}>
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          id="price"
          value={product.price || ""}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
      </div>
      <div className={Styles.formElement}>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={product.description || ""}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
      </div>

      <input type="submit" value="Update" className={Styles.buttonStyle} />
      <h3>{updated}</h3>
    </form>
  );
};

export default ProductUpdate;
