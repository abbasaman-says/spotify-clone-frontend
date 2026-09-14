import axios from "axios";

const api = axios.create({
    baseURL: "https://focused-empathy-production.up.railway.app",
    withCredentials: true
});

export default api;