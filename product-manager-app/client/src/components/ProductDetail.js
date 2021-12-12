import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductDetails = (props) => {
  const [product, setProduct] = useState();
  const [loaded, setLoaded] = useState(false);
  const divStyle = {
    textAlign: "center",
    marginTop: "300px",
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

  if (loaded) {
    return (
      <div style={divStyle}>
        <h1>{product.title}</h1>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ProductDetails;
