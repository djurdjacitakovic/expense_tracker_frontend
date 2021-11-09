import Table from "../components/Table";
import { columns } from "../common/expenseConfig";
import { useQuery } from "react-query";
import { GetData } from "../services/Service";

const Expense = () => {
  const URL = "/expense/";
  const { isLoading, isError, data, error } = useQuery(["expense", URL], () =>
    GetData(URL)
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const rows = data.expenses;
  return (
    <h2>
      Expense
      <br />
      <Table rows={rows} columns={columns} />
    </h2>
  );
};

export default Expense;
