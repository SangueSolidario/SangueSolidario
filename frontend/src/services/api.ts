import axios from "axios";

const api = axios.create({
  baseURL: "https://sanguesolidario.azure-api.net/api/",
  // "https://webapp-sanguesolidario.azurewebsites.net/",
});

export default api;
