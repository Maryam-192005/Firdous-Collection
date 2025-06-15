import React, { useState } from 'react';
import { Form, Button, Container, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirm) {
      setError("Passwords do not match");
      return;
    }

    // Simulated signup logic
    console.log("User registered:", form);
    setSuccess(true);

    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="signup-bg">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className="signup-card p-4">
          <h2 className="text-center fancy-heading mb-4">Create Your Account</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">Account created! Redirecting...</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className="input-field"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                value={form.email}
                onChange={handleChange}
                className="input-field"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="input-field"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                name="confirm"
                type="password"
                placeholder="Confirm password"
                value={form.confirm}
                onChange={handleChange}
                className="input-field"
                required
              />
            </Form.Group>

            <Button variant="dark" type="submit" className="w-100 custom-btn">
              Sign Up
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Signup;
