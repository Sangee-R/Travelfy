import axios from "axios";

const isProduction = process.env.NODE_ENV === "production";

export const baseURL = isProduction
  ? "https://travelfy.onrender.com/api"
  : "http://localhost:5005/api";

export const apiServer = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 7500,
});
