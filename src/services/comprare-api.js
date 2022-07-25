import axios from "axios";

const api = axios.create({
    baseURL:"https://comprare-api.herokuapp.com"
});

export default api;