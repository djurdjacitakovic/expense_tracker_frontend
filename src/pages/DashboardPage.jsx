import Table from "../components/Table";
import { columnsIncome, columnsExpense } from "../common/dashboardConfig";
import { GetData } from "../services/Service";
import { useQuery } from "react-query";

const Dashboard = () => {
  const URLexpense = "/expense/last-five";
  const URLincome = "/income/last-five";

  const {
    data: dataExpense,
    error: errorExpense,
    isLoading: isLoadingExpense,
    isError: isErrorExpense,
  } = useQuery(["lastFiveExpense", URLexpense], () => GetData(URLexpense));

  const {
    data: dataIncome,
    error: errorIncome,
    isLoading: isLoadingIncome,
    isError: isErrorIncome,
  } = useQuery(["lastFiveIncome", URLincome], () => GetData(URLincome));

  if (isLoadingExpense || isLoadingIncome) {
    return <span>Loading...</span>;
  }

  if (isErrorExpense || isErrorIncome) {
    return <span>Error: {`${errorExpense.message}`` ${errorIncome}`}</span>;
  }

  return (
    <h2>
      Dashboard
      <br />
      Last five expense changes
      <br />
      <Table rows={dataExpense} columns={columnsExpense} />
      <br />
      Last five income changes
      <br />
      <Table rows={dataIncome} columns={columnsIncome} />
      <br />
    </h2>
  );
};

export default Dashboard;
