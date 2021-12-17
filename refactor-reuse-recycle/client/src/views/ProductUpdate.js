import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import ProductForm from "../components/ProductForm";
const ProductUpdate = (props) => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${props.id}`)
      .then((productData) => {
        setProduct(productData.data);
      })
      .catch((err) => console.log(err));
  }, [props.id]);

  const updateProduct = (product) => {
    axios
      .put(`http://localhost:8000/api/products/${props.id}`, product)
      .then((res) => {
        setTimeout(() => navigate("/"), 1000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ProductForm
      submitLogic={updateProduct}
      productData={product}
      sumbitValue="update"
    />
  );
};

export default ProductUpdate;
