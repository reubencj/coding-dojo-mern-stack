import React from "react";
import axios from "axios";

const DeleteButton = (props) => {
  const { id, successCallBack } = props;

  const handleDelete = () => {
    axios
      .delete("http://localhost:8000/api/products/" + id)
      .then((res) => successCallBack())
      .catch((err) => console.log(err));
  };

  return (
    <button
      onClick={handleDelete}
      style={{ backgroundColor: "red", color: "white" }}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
