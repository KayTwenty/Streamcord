import axios from "axios";

// Create an axios instance
export const api = axios.create({
  baseURL:
    process.env.NODE_ENV == "development"
      ? process.env.NEXT_PUBLIC_DEV_API
      : process.env.NEXT_PUBLIC_PROD_API,
  withCredentials: true,
});