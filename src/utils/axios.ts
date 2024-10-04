import appConfig from "@/config/appConfig";
import axios from "axios";

const API_PREFIX = "/api";

const axiosInstance = axios.create({
  baseURL: appConfig.apiEndpoint + API_PREFIX, // Set the base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// You can also add interceptors here if needed
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors here
    return Promise.reject(error);
  },
);

export default axiosInstance;
