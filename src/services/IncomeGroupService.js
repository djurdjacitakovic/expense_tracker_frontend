import axios from "axios";

export const FetchData = (URL) =>
  axios.get(URL).then((response) => response.data);
