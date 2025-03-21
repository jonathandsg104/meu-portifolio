import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Endereço do backend
});

export default api;

