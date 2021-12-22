import React, { useEffect, useState } from "react";
import { Link, navigate } from "@reach/router";
import AuthorForm from "../components/AuthorForm";
import axios from "axios";
import { Container } from "react-bootstrap";

const UpdateAuthor = (props) => {
  const { id } = props;
  const [author, setAuthor] = useState();
  const [success, setSuccess] = useState();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/author/${id}`)
      .then((res) => setAuthor(res.data[0]))
      .catch((err) => console.log(err));
  }, [id]);

  const updateAuthor = (authorData) => {
    axios
      .put(`http://localhost:8000/api/author/${id}`, { name: authorData })
      .then(() => {
        setSuccess("Author Updated");
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
      {author && (
        <AuthorForm
          authorData={author.name}
          sumbitLogic={updateAuthor}
          success={success}
          buttonValue="Add"
          errors={errors}
        />
      )}
    </Container>
  );
};

export default UpdateAuthor;
