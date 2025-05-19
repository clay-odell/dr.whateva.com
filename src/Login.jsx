import { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { login } from "../api";

const Login = ({ onLoginSuccess }) => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const token = await login(password);
            // Debug log: Check that a token is returned.
            console.log("Token received in login component:", token);
            if (!token) {
                throw new Error("Token not found");
            }
            // Invoke onLoginSuccess callback with token.
            onLoginSuccess(token);
        } catch (err) {
            console.error("Error in handleSubmit:", err);
            setError("Invalid password. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="mt-5" style={{ maxWidth: "400px" }}>
            <h4 className="text-center">Admin Login</h4>
            {error && (<Alert variant="danger" className="text-center">{error}</Alert>)}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter admin password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3 w-100" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </Button>
            </Form>
        </Container>
    );
};

export default Login;
