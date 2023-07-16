import axios from "axios";

const ACCESS_KEY = "ZeilUhW1TocrRZua1iRhCjQfJZV59SwG6zizaeZuKl0";
const BASE_URl = "https://api.unsplash.com";

const api = axios.create({
  baseURL: BASE_URl,
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
});

export default api;
