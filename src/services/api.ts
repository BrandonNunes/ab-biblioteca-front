import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBhZG1pbiIsImlhdCI6MTY0NzczODY0MSwiZXhwIjoxNjQ4MzQzNDQxfQ.2n2HP9R4IoQfbjRwAqVaYC2nf_WDYaT0irJuUJ3ai3U"

const api = axios.create({
    baseURL: 'http://localhost:4000/api/',
    headers:{
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`,
    }
});

// api.defaults.headers.common['Authorization'] = token;

const del = axios.create({
    baseURL: 'http://localhost:4000/api/',
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}` 
    }
});


export default api;