import React, { useState } from 'react';
import { Form, Button, Container, Card, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // custom styles here

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulated check
    if (email !== "user@example.com" || password !== "123456") {
      setShowModal(true);
    } else {
      console.log("Login successful");
    }
  };

  return (
    <div className="login-bg">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className="login-card p-4">
          <h2 className="text-center mb-4 fancy-heading">Welcome Back</h2>
          <p className="text-center text-muted mb-4">Login to continue your shopping experience</p>

          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                required
              />
            </Form.Group>

            <Button variant="dark" type="submit" className="w-100 mt-4 custom-btn">
              Login
            </Button>
          </Form>
        </Card>
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Account Not Found</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          No account matched these details. Would you like to create one?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="dark" onClick={() => {
            setShowModal(false);
            navigate("/signup");
          }}>
            Sign up now
          </Button>
        </Modal.Footer>
      </Modal>
      
    </div>
  );
};

export default Login;
