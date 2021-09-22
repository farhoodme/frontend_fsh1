import axios from "axios";
import getConfig from "next/config";
import Cookies from "js-cookie";

const { publicRuntimeConfig } = getConfig();
const apiUrl = publicRuntimeConfig.apiUrl;

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

axiosInstance.interceptors.request.use(
  async (request) => {
    const token = Cookies.get("token");

    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }

    if (!request.headers["Content-Type"]) {
      request.headers["Content-Type"] = "application/json";
    }

    return request;
  },
  (error) => console.error(error)
);

export const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

export default axiosInstance;
