import axios from "axios";

export const GetIncomeGroups = (URL) =>
  axios.get(URL).then((response) => response.data);
