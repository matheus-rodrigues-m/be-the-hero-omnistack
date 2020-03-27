import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333', //URL base de acesso ao BD
})

export default api;