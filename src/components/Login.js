import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormText from "react-bootstrap/FormText";
import { useNavigate } from "react-router-dom";

function Login({ setLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError(true);
      return false;
    }
    if (username === "dummyuser" && password === "123456") {
      setError(false);
      setLoggedIn(true);
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <Container className="main d-flex justify-content-center align-items-center">
      <Row>
        <Col>
          <h2 className="mb-6">Login</h2>
          <Form onSubmit={handleSubmit} className="mt-2">
            <div className="mb-3 d-flex">
              <Form.Label className="mr-3">User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {error && !username && (
                <FormText className="text-danger">
                  Enter valid user name
                </FormText>
              )}
            </div>

            <div className="mb-3 d-flex justify-content-space-between  w-100">
              <Form.Label className="mr-3">Enter Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && !password && (
                <FormText className="text-danger">
                  Enter valid password
                </FormText>
              )}
            </div>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
