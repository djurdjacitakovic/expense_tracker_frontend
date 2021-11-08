import axios from "axios";

export const GetExpenseGroups = (URL) =>
  axios.get(URL).then((response) => response.data);
