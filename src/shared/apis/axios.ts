import axios, { InternalAxiosRequestConfig } from "axios";
import { BASE_URL, STORAGE_KEY } from "../config";

const api = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 100000,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig<{ headers: string }>) => {
    const access_token = localStorage.getItem(STORAGE_KEY);

    if (access_token !== null) {
      config.headers["Authorization"] = access_token;
    }
    return config;
  }
);

export default api;
