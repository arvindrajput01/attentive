// axiosInterceptor.js
import axios from 'axios';
import { isTokenExpired } from './tokenUtils';
import { refreshToken } from './api';

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token && isTokenExpired(token)) {
      return refreshToken().then((newToken) => {
        config.headers.Authorization = `Bearer ${newToken}`;
        return config;
      });
    }
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
