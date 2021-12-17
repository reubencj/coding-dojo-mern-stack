import React, { useEffect, useState } from "react";
import Styles from "./ProductForm.module.css";

const ProductForm = (props) => {
  const [product, setProduct] = useState(props.productData);

  useEffect(() => setProduct(props.productData), [props.productData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    props.submitLogic(product);
    console.log({ product });
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
          onChange={(e) =>
            setProduct({ ...product, [e.target.name]: e.target.value })
          }
          value={product.title}
        />
      </div>
      <div className={Styles.formElement}>
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          id="price"
          onChange={(e) =>
            setProduct({ ...product, [e.target.name]: e.target.value })
          }
          value={product.price}
        />
      </div>
      <div className={Styles.formElement}>
        <label htmlFor="description">Desciption</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={(e) =>
            setProduct({ ...product, [e.target.name]: e.target.value })
          }
          value={product.description}
        />
      </div>
      <input
        type="submit"
        value={props.submitValue}
        className={Styles.buttonStyle}
      />
    </form>
  );
};

export default ProductForm;
