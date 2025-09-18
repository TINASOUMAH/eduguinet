import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // 👉 adapte ton backend
  withCredentials: true, // ⚡ cookies activés
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;