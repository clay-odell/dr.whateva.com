import { useEffect, useState } from "react";
import { getRequests, getMailingListSubscriptions } from "../api";
import { Container, Table, Spinner, Alert } from "react-bootstrap";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [mailingList, setMailingList] = useState([]);
  const [loadingRequests, setLoadingRequests] = useState(true);
  const [loadingMailingList, setLoadingMailingList] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch song requests
    const fetchRequests = async () => {
      try {
        const data = await getRequests();
        setRequests(data);
      } catch (err) {
        setError("Failed to fetch song requests.");
      }
      setLoadingRequests(false);
    };

    // Fetch mailing list subscriptions
    const fetchMailingList = async () => {
      try {
        const data = await getMailingListSubscriptions();
        setMailingList(data);
      } catch (err) {
        setError("Failed to fetch mailing list subscriptions.");
      }
      setLoadingMailingList(false);
    };

    fetchRequests();
    fetchMailingList();
  }, []);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>

      {error && <Alert variant="danger">{error}</Alert>}

      {/* Song Requests Table */}
      <h4>Song Requests</h4>
      {loadingRequests ? (
        <Spinner animation="border" />
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Requester Name</th>
              <th>Song Title</th>
              <th>Artist</th>
              <th>Album/Version</th>
              <th>Reason for Request</th>
            </tr>
          </thead>
          <tbody>
            {requests.length > 0 ? (
              requests.map((req, index) => (
                <tr key={req.id}>
                  <td>{index + 1}</td>
                  <td>{req.name}</td>
                  <td>{req.song_title}</td>
                  <td>{req.artist}</td>
                  <td>{req.album_or_version || "N/A"}</td>
                  <td>{req.reason}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No requests found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      )}

      {/* Mailing List Table */}
      <h4 className="mt-4">Mailing List Subscriptions</h4>
      {loadingMailingList ? (
        <Spinner animation="border" />
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {mailingList.length > 0 ? (
              mailingList.map((email, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center">
                  No subscribers found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default AdminDashboard;
