import axios from "axios";

const api = axios.create({
  baseURL: "https://sanguesolidario.azure-api.net/api/",
});

export default api;
