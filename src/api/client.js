import axios from 'axios';

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: { 'Content-Type': 'application/json' }
});

// REQUEST: Attach tokens automatically
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('auth_token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// RESPONSE: Centralized Error Handling
axiosClient.interceptors.response.use(
    (response) => response.data, // Strip the 'data' wrapper immediately
    (error) => {
        const status = error.response?.status;
        if (status === 401) {
            // Logic for Logout/Redirect to login
        }
        return Promise.reject(error.response?.data || error.message);
    }
);

export default axiosClient;