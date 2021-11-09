import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;
const client = axios.create({
  baseURL: baseUrl,
});

export const GetData = (URL) =>
  client.get(URL).then((response) => response.data);
