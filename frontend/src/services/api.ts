import axios from "axios";

const api = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://sanguesolidario.azure-api.net/api/",
});

export default api;
