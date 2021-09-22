import axios from "axios";
import getConfig from "next/config";
import Cookies from "js-cookie";

const { publicRuntimeConfig } = getConfig();
const apiUrl = publicRuntimeConfig.apiUrl;

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

export default axiosInstance;
