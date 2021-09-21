import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;

console.log(baseURL);
let headers = {};

if (localStorage.token) headers.authorization = `Bearer ${localStorage.token}`;

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});

export default axiosInstance;
