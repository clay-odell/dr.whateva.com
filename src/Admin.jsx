import { useState, useEffect } from "react";
import { login } from "../api";
import { Container, Form, Button, Alert, Spinner } from "react-bootstrap";
import AdminDashboard from "./AdminDashboard";

const Admin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is already authenticated (on component mount)
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      const existingToken = localStorage.getItem("authToken");

      if (!existingToken) {
        const token = await login(password);
        localStorage.setItem("authToken", token);
      }

      setIsAuthenticated(true); // Update state to show the dashboard
    } catch (err) {
      setError("Invalid password or login failed.");
    }

    setLoading(false);
  };

  // If authenticated, show the Admin Dashboard instead of the login form
  if (isAuthenticated) {
    return <AdminDashboard />;
  }

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
