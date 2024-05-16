import axios from "axios";

const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com",
  params: {
    geo: "TR",
    lang: "tr",
  },
  headers: {
    "X-RapidAPI-Key": "62daa3f4d8msh4434cd1c8d199dep18ef4cjsn7c0a81d180ca",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
});
export default api;
