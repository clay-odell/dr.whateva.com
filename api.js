import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

// Fetch all song requests
export async function getRequests() {
    try {
        const response = await api.get("/requests");
        return response.data.requests;
    } catch (error) {
        console.error("Error fetching requests:", error);
        throw error.response?.data || error;
    }
}

// Submit a new song request
export async function submitRequest(requestData) {
    try {
        const response = await api.post("/submit", requestData);
        return response.data;
    } catch (error) {
        console.error("Error submitting request:", error);
        throw error.response?.data || error;
    }
}

// Subscribe to the mailing list
export async function subscribeToMailingList(email) {
    try {
        const response = await api.post("/mailing-list/subscribe", { email });
        return response.data.subscription;
    } catch (error) {
        console.error("Error subscribing to mailing list:", error);
        throw error.response?.data || error;
    }
}

// Fetch mailing list subscriptions (optional filters: email, limit, offset)
export async function getMailingListSubscriptions({ email, limit, offset } = {}) {
    try {
        const response = await api.get("/mailing-list/subscriptions", {
            params: { email, limit, offset }
        });
        return response.data.emails;
    } catch (error) {
        console.error("Error fetching mailing list subscriptions:", error);
        throw error.response?.data || error;
    }
}

export default { getRequests, submitRequest, subscribeToMailingList, getMailingListSubscriptions };
