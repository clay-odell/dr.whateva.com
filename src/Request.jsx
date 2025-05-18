import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { submitRequest } from "../api";

const Request = () => {
  const [formData, setFormData] = useState({
    name: "",
    songTitle: "",
    artist: "",
    albumOrVersion: "",
    reason: "",
  });

  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await submitRequest(formData);
      setStatusMessage("Request submitted successfully!");
      setFormData({
        name: "",
        songTitle: "",
        artist: "",
        albumOrVersion: "",
        reason: "",
      });
    } catch (error) {
      setStatusMessage("Error submitting request. Please try again.");
      console.error("Submission failed:", error);
    }
  };

  return (
    <>
      <h1>Make A Request</h1>
      {statusMessage && <p>{statusMessage}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group controlId="songTitle">
          <Form.Label>Song Title</Form.Label>
          <Form.Control
            type="text"
            name="songTitle"
            value={formData.songTitle}
            onChange={handleChange}
            placeholder="Enter song title"
            required
          />
        </Form.Group>

        <Form.Group controlId="artist">
          <Form.Label>Artist</Form.Label>
          <Form.Control
            type="text"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            placeholder="Enter artist name"
            required
          />
        </Form.Group>

        <Form.Group controlId="albumOrVersion">
          <Form.Label>Album/Version</Form.Label>
          <Form.Control
            type="text"
            name="albumOrVersion"
            value={formData.albumOrVersion}
            onChange={handleChange}
            placeholder="Enter album or version (optional)"
          />
        </Form.Group>

        <Form.Group controlId="reason">
          <Form.Label>Reason for Request</Form.Label>
          <Form.Control
            as="textarea"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Tell us why you think this is a perfect song!"
            rows={3}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit Request
        </Button>
      </Form>
    </>
  );
};

export default Request;
