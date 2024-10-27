import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://ddd.com',
  withCredentials: true,
});
