import { create } from "axios";
import { hashHistory } from "react-router";

const client = create({
  baseURL: process.env.API_URL
});

// Add a request interceptor
client.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers["Authorization"] = `${token}`;
  return config;
}, function (error) {
  debugger;
  console.error(error);
  return Promise.reject(error);
});

// Add a response interceptor
client.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  debugger;
  if (error.response.status == 401) {
    hashHistory.replace("/login")
  }
  console.error(error);
  return Promise.reject(error);
});

export default client;
