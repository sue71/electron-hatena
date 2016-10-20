import { create } from "axios";

const client = create({
  baseURL: process.env.API_URL
});

// Add a request interceptor
client.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers["Authorization"] = `${token}`;
  return config;
}, function (error) {
  console.error(error);
  return Promise.reject(error);
});

// Add a response interceptor
client.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  console.error(error);
  return Promise.reject(error);
});

export default client;
