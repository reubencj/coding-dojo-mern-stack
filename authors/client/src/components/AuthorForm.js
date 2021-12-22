import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import { Form, Button, Container, Alert, Row, Col } from "react-bootstrap";

const AuthorForm = (props) => {
  const { authorData, sumbitLogic, buttonValue, success, errors } = props;

  const [author, setAuthor] = useState(authorData);

  useEffect(() => setAuthor(authorData), [authorData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sumbitLogic(author);
  };

  return (
    <Container className="border p-3 mt-3" fluid="md">
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Author's name"
                value={author || ""}
                onChange={(e) => setAuthor(e.target.value)}
              />
              {errors.name && (
                <Form.Text className="text-danger">
                  {errors.name.message}
                </Form.Text>
              )}
            </Form.Group>

            <Row className="mt-3 mb-3">
              <Col sm={3}>
                <Button
                  onClick={() => navigate("/")}
                  variant="secondary"
                  size="lg"
                >
                  {" "}
                  Cancel{" "}
                </Button>
              </Col>
              <Col sm={3}>
                <Button onClick={handleSubmit} variant="success" size="lg">
                  {buttonValue}
                </Button>
              </Col>
            </Row>

            {success && <Alert variant="success">{success}</Alert>}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthorForm;
