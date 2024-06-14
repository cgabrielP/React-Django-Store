import axios from 'axios';

const URL = 'http://127.0.0.1:8000/api';

const instance = axios.create({
    baseURL: URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Interceptor para actualizar el token JWT en cada solicitud
instance.interceptors.request.use(config => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        config.headers.Authorization = `JWT ${accessToken}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// Interceptor para manejar el token de actualización
instance.interceptors.response.use(
    response => response,
    error => {
        const originalRequest = error.config;

        // Refresh token si el token expiró
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            return axios.post(`${URL}/token/refresh/`, {
                refresh: localStorage.getItem('refreshToken')
            })
            .then(response => {
                localStorage.setItem('accessToken', response.data.access);
                instance.defaults.headers['Authorization'] = `JWT ${response.data.access}`;
                originalRequest.headers['Authorization'] = `JWT ${response.data.access}`;
                return axios(originalRequest);
            });
        }
        return Promise.reject(error);
    }
);

export default instance;
