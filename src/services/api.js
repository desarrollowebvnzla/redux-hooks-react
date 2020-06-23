import axios from "axios";

const baseURL =
  // "http://apilaravel.sistemasweb.xyz";
  "http://127.0.0.1:8000/api/";

axios.defaults.withCredentials = true;

export default (url, method, data, headers) =>
  axios({
    baseURL,
    method,
    url,
    data,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...headers,
    },
  });
