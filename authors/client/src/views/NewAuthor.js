import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import AuthorForm from "../components/AuthorForm";
import axios from "axios";
import { Container } from "react-bootstrap";

const NewAuthor = (props) => {
  const [success, setSuccess] = useState();
  const [errors, setErrors] = useState({});

  const createNewAuthor = (author) => {
    axios
      .post("http://localhost:8000/api/author/", { name: author })
      .then(() => {
        setSuccess("Author Created");
        setErrors({});
        setTimeout(() => navigate("/"), 2000);
      })
      .catch((err) => setErrors(err.response.data.errors));
  };

  return (
    <Container>
      <h1>Favorite Author</h1>
      <Link to="/" className="fw-bold">
        Home
      </Link>
      <p className="f3-3 fw-bold">Add a new author</p>
      <AuthorForm
        authorData={{ name: "" }}
        sumbitLogic={createNewAuthor}
        success={success}
        buttonValue="Add"
        errors={errors}
      />
    </Container>
  );
};

export default NewAuthor;
