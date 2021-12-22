import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import { Container, Table, Button } from "react-bootstrap";
const Main = (props) => {
  const [authors, setAuthors] = useState();
  const [toggleDel, setToggleDel] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author")
      .then((res) => setAuthors(res.data))
      .catch((err) => console.log(err));
  }, [toggleDel]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/author/${id}`)
      .then(() => setToggleDel(!toggleDel))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <h1>Favorite Author</h1>
      <Link to="/new">Add a new author</Link>
      <p>We have quotes from:</p>
      <Table striped bordered size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions Available</th>
          </tr>
        </thead>
        <tbody>
          {authors &&
            authors.map((author) => {
              return (
                <tr key={author._id}>
                  <td>{author.name}</td>
                  <td>
                    <>
                      <Button
                        variant="primary"
                        style={{ marginRight: "10px" }}
                        onClick={() => navigate(`/edit/${author._id}`)}
                      >
                        Update
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(author._id)}
                      >
                        Delete
                      </Button>
                    </>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Main;
