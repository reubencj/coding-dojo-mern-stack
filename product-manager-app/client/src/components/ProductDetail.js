import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const ProductDetails = (props) => {
  const [product, setProduct] = useState();
  const [loaded, setLoaded] = useState(false);
  const [deleted, setDeleted] = useState();
  const divStyle = {
    textAlign: "center",
    marginTop: "300px",
  };

  const deleteStyle = {
    backgroundColor: "red",
    color: "white",
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${props.id}`)
      .then((res) => {
        setProduct(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, [props.id]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then(() => {
        setDeleted("Product Deleted");
        setTimeout(() => navigate("/"), 3000);
      })
      .catch((err) => console.log(err));
  };

  if (loaded) {
    return (
      <div style={divStyle}>
        <h1>{product.title}</h1>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <button onClick={() => handleDelete(product._id)} style={deleteStyle}>
          Delete
        </button>
        <h2>{deleted}</h2>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ProductDetails;
