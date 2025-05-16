import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const MailingList = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for signing up, ${email}!`);
        setEmail("");
    };
    return (
        <Container className="mt-5" style={{ maxWidth: "300px" }}>
            <h4 className="text-center">Join our Mailing List</h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3 w-100">
                    Sign Up
                </Button>
            </Form>
        </Container>
    );
};
export default MailingList;