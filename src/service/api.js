import axios from "axios";

const api = axios.create({
    baseURL: 'https://lacerda.up.railway.app'
});

export default api;