import axios from "axios";

export const axiosAuth = () => {
  const token = localStorage.getItem("authToken");
  return axios.create({
    baseURL: "http://localhost:5000/api",
    headers: { Authorization: token }
  });
}