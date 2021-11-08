import axios from "axios";

export const GetIncomeGroups = () =>
  axios
    .get("http://localhost:4000/income-groups/")
    .then((response) => response.data.incomeGroups);
