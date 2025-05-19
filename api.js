import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://api.drwhateva.com/api/";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

// Get stored token from localStorage
function getAuthToken() {
    return localStorage.getItem("authToken");
}

// Fetch all song requests (Requires authentication)
export async function getRequests() {
    try {
        const response = await api.get("/requests", {
            headers: {
                Authorization: `Bearer ${getAuthToken()}`
            }
        });
        return response.data.requests;
    } catch (error) {
        console.error("Error fetching requests:", error);
        throw error.response?.data || error;
    }
}

// Submit a new song request (No authentication required)
export async function submitRequest(requestData) {
    try {
        const response = await api.post("/submit", requestData);
        return response.data;
    } catch (error) {
        console.error("Error submitting request:", error);
        throw error.response?.data || error;
    }
}

// Subscribe to the mailing list (No authentication required)
export async function subscribeToMailingList(email) {
    try {
        const response = await api.post("/mailing-list/subscribe", { email });
        return response.data.subscription;
    } catch (error) {
        console.error("Error subscribing to mailing list:", error);
        throw error.response?.data || error;
    }
}

// Fetch mailing list subscriptions (Requires authentication)
export async function getMailingListSubscriptions({ email, limit, offset } = {}) {
    try {
        const response = await api.get("/mailing-list/subscriptions", {
            params: { email, limit, offset },
            headers: {
                Authorization: `Bearer ${getAuthToken()}`
            }
        });
        return response.data.emails;
    } catch (error) {
        console.error("Error fetching mailing list subscriptions:", error);
        throw error.response?.data || error;
    }
}

// Delete a song request (Requires admin authentication)
export async function deleteRequest(id, adminPassword) {
    try {
        const response = await api.delete(`/requests/${id}`, {
            data: { password: adminPassword },
            headers: {
                Authorization: `Bearer ${getAuthToken()}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting request:", error);
        throw error.response?.data || error;
    }
}

// Login to obtain JWT token
export async function login(password) {
    try {
        const response = await api.post("/login", { password });
        localStorage.setItem("authToken", response.data.token);
        return response.data.token;
    } catch (error) {
        console.error("Login error:", error);
        throw error.response?.data || error;
    }
}

export default {
    getRequests,
    submitRequest,
    subscribeToMailingList,
    getMailingListSubscriptions,
    deleteRequest,
    login
};
