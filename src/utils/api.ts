import axios from "axios";

const api = axios.create({
  baseURL: process.env.API || "http://localhost:3000",
});

export { api };
