import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation
import { login } from "../api";
import { Container, Form, Button, Alert, Spinner } from "react-bootstrap";

const Admin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const token = await login(password);
      localStorage.setItem("authToken", token);

      navigate("/dashboard"); // Redirect to Admin Dashboard
    } catch (err) {
      setError("Invalid password or login failed.");
    }

    setLoading(false);
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Admin Login</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Enter Admin Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleLogin} disabled={loading} className="w-100">
          {loading ? <Spinner animation="border" size="sm" /> : "Login"}
        </Button>
      </Form>

      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
    </Container>
  );
};

export default Admin;
