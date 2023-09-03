import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.leaderbored.gg/api",
});

export default axiosInstance;