import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { subscribeToMailingList } from "../api";

const MailingList = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await subscribeToMailingList(email);
            setMessage("✅ Thank you for signing up!");
            setEmail(""); // Clear input after successful submission
        } catch (error) {
            setMessage("❌ Error subscribing. Please try again.");
            console.error("Subscription error:", error);
        }
    };

    return (
        <Container className="mt-5" style={{ maxWidth: "300px" }}>
            <h4 className="text-center">Join our Mailing List</h4>
            {message && <p className="text-center">{message}</p>}
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
