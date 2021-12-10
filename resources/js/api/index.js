import axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
});

instance.interceptors.request.use(
    async (config) => {
        const token = await localStorage.getItem('token') || null;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        console.log('API Tracker Error', err);
        return Promise.resolve(err);
    }
);

instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
});

export default instance;