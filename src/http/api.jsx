import useTokenStore from '@/store';
import axios from 'axios';

// Create a configured Axios instance
const api = axios.create({
    baseURL: 'https://backend-uts.vercel.app',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor to attach token
api.interceptors.request.use((config) => {
    const { token } = useTokenStore.getState();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Response interceptor for global error handling
api.interceptors.response.use(
    response => response,
    error => {
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);

// API Functions
export const login = async (data) => {
    try {
        const response = await api.post('/api/admin/login', data);
        console.log('Login API Response:', response.data); // Add this to check the response structure
        const { accessToken, userId } = response.data; // Adjust according to actual response structure

        return { data: { accessToken, userId } }; // Ensure this matches the expected response format
    } catch (error) {
        console.error('Login Error:', error);
        throw error;
    }
};
