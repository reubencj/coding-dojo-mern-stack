import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const ProductList = (props) => {
  const [allProducts, setAllProducts] = useState();
  const [loaded, setLoaded] = useState(false);

  const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setAllProducts(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={divStyle}>
      <h1>All Products:</h1>
      {loaded &&
        allProducts.map((product) => {
          return (
            <div key={product._id}>
              <Link key={product._id} to={`/${product._id}`}>
                {product.title}
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default ProductList;
