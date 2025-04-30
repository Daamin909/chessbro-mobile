import axios from "axios";

const backend = axios.create({
  baseURL: "https://chessbro.daamin.hackclub.app/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default backend;
