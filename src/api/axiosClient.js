import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: 'http://localhost:4000/api',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // "Content-Type": "application/json"
    },
});