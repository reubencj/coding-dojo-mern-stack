import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import Styles from "./ProductList.module.css";
const ProductList = (props) => {
  const [allProducts, setAllProducts] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getData();
  }, [props.toggle]);

  const getData = () => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setAllProducts(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then(() => getData())
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>All Products:</h1>
      <ol className={Styles.listStyle}>
        {loaded &&
          allProducts.map((product) => {
            return (
              <li key={product._id}>
                <Link key={product._id} to={`/${product._id}`}>
                  {product.title}
                </Link>
                <button
                  onClick={() => navigate(`/${product._id}/edit`)}
                  className={Styles.update}
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className={Styles.delete}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default ProductList;
