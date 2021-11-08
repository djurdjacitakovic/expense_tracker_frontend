import axios from "axios";

export const GetData = (URL) =>
  axios.get(URL).then((response) => response.data);
