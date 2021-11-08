import Table from "../components/Table";
import { columnsIncome, columnsExpense } from "../common/dashboardConfig";
import { GetData } from "../services/ExpenseGroupService";
import { FetchData } from "../services/IncomeGroupService";
import { useQuery } from "react-query";

const Dashboard = () => {
  const URLexpense = "http://localhost:4000/expense/last-five";
  const URLincome = "http://localhost:4000/income/last-five";

  const { isLoading, isError, data, error } = useQuery(
    ["todos", URLexpense],
    () => GetData(URLexpense)
  );
  const {
    data: dataI,
    error: errorI,
    loading: landingI,
    isError: isErrorI,
  } = useQuery(["todos", URLincome], () => FetchData(URLincome));

  if (isLoading || landingI) {
    return <span>Loading...</span>;
  }

  if (isError || isErrorI) {
    return <span>Error: {`${error.message}`` ${errorI}`}</span>;
  }

  return (
    <h2>
      Dashboard
      <br />
      Last five expense changes
      <br />
      <Table rows={data} columns={columnsExpense} />
      <br />
      Last five income changes
      <br />
      <Table rows={dataI} columns={columnsIncome} />
      <br />
    </h2>
  );
};

export default Dashboard;
