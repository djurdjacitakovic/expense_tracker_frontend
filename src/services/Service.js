import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;
const client = axios.create({
  baseURL,
});

export const GetData = (URL) =>
  client.get(URL).then((response) => response.data);

export const AddData = (URL, data) =>
  client.post(URL, data).then((response) => response.data);
