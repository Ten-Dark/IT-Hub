import axios from 'axios';

export const $api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4200/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

$api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // logout logic, redirection, notification и т.д.
      console.warn('Unauthorized!');
    }
    return Promise.reject(error);
  },
);
