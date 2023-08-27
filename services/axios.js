import axios from 'axios';

export const api =  axios.create({
  baseURL: process.env.VUE_APP_URL,
  headers: {
    "Access-Control-Allow-Origin": process.env.VUE_APP_URL,
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, x-requested-with, content-type, Content-Type, Authorization"
  }
});

api.interceptors.request.use(config => {
  const userToken = localStorage.getItem('user-token');
  if (userToken && userToken !== 'undefined') {
    config.headers.Authorization = `Bearer ${JSON.parse(userToken).data}`;
  } else {
    delete config.headers.Authorization;
  }
  return config;
});

export default api;
